"use client";

import { useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface DroneSequenceProps {
  frameCount: number;
  progress: MotionValue<number>;
}

export default function DroneSequence({ frameCount, progress }: DroneSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Transform external progress (0-1) to frame index (0 to frameCount - 1)
  const frameIndex = useTransform(progress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      const promises = [];

      for (let i = 0; i < frameCount; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image();
          const paddedIndex = i.toString().padStart(4, "0");
          img.src = `/sequence/frame_${paddedIndex}.jpg`;
          img.onload = () => {
            loadedImages[i] = img;
            resolve();
          };
          img.onerror = () => {
            // Handle missing frames gracefully if needed
            console.error(`Failed to load frame ${i}`);
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
  }, [frameCount]);

  const renderFrame = useCallback(
    (parsedIndex: number) => {
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
    <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
      <canvas
        ref={canvasRef}
        className={clsx(
          "h-full w-full object-cover transition-opacity duration-700",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      />
      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50">
          <span className="animate-pulse">Loading Flight Data...</span>
        </div>
      )}
    </div>
  );
}
