"use client";

import { useTransform, useMotionValueEvent } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./DroneSequence.module.css";

export default function DroneSequence({ 
  frameCount, 
  progress, 
  folder = "/sequence", 
  prefix = "frame_", 
  digits = 4,
  startAt = 0
}) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Transform external progress (0-1) to frame index (0 to frameCount - 1)
  const frameIndex = useTransform(progress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    const loadImages = async () => {
      // If folder changes, we might want to interact with isLoading state
      setIsLoading(true);

      // Safety fallback: Mobile sequence starts at 1, Desktop at 0
      // If prop didn't pass correctly, infer from folder
      const effectiveStartAt = (folder.includes("mobile") && startAt === 0) ? 1 : startAt;
      
      const loadedImages = [];
      const promises = [];

      for (let i = 0; i < frameCount; i++) {
        const promise = new Promise((resolve) => {
          const img = new Image();
          const currentIndex = i + effectiveStartAt;
          const paddedIndex = currentIndex.toString().padStart(digits, "0");
          img.src = `${folder}/${prefix}${paddedIndex}.jpg`;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
          img.onerror = () => {
            // Handle missing frames gracefully if needed
            console.error(`Failed to load frame ${currentIndex} from ${folder}`);
            resolve();
          };
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      setImages(loadedImages);
      setIsLoading(false);
    };

    loadImages();
  }, [frameCount, folder, prefix, digits, startAt]);

  const renderFrame = useCallback(
    (parsedIndex) => {
      const canvas = canvasRef.current;
      if (!canvas || images.length === 0) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      // Ensure index is within bounds
      const index = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(parsedIndex))
      );

      const img = images[index];
      if (!img) return;

      // Handle High DPI displays
      const dpr = window.devicePixelRatio || 1;

      // We want the canvas to fill the viewport (or its container)
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        context.scale(dpr, dpr);
      }

      // Clear canvas
      context.clearRect(0, 0, width, height);

      // Draw image "cover" style
      // Standard cover algorithm:
      const scale = Math.max(width / img.width, height / img.height);

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;

      context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    [frameCount, images]
  );

  // Initial draw + resize listener
  useEffect(() => {
    if (!isLoading && images.length > 0) {
      renderFrame(0);

      const handleResize = () => renderFrame(frameIndex.get());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isLoading, images, renderFrame, frameIndex]);

  // Hook into framer motion change event to render
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isLoading) {
      renderFrame(latest);
    }
  });

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={clsx(
          styles.canvas,
          isLoading ? styles.loading : styles.loaded
        )}
      />
      {/* Loading Indicator */}
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <span className={styles.pulse}>Loading Flight Data...</span>
        </div>
      )}
    </div>
  );
}
