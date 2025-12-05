"use client";

import { useState } from "react";

interface ProjectGalleryProps {
  images: string[];
  imageAlt: string;
}

export function ProjectGallery({ images, imageAlt }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-handwriting text-4xl font-bold text-[#5D4037] dark:text-[#8D6E63]">
        Project Gallery
      </h2>
      <div className="relative w-full">
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
          <img
            className="w-full h-full object-cover"
            src={images[currentIndex]}
            alt={imageAlt}
          />
        </div>
        {images.length > 1 && (
          <>
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <button
                onClick={previousImage}
                className="flex items-center justify-center size-10 rounded-full bg-white/70 dark:bg-black/50 text-[#5D4037] dark:text-white hover:bg-white dark:hover:bg-black/70 transition-colors shadow-md"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2">
              <button
                onClick={nextImage}
                className="flex items-center justify-center size-10 rounded-full bg-white/70 dark:bg-black/50 text-[#5D4037] dark:text-white hover:bg-white dark:hover:bg-black/70 transition-colors shadow-md"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => selectImage(index)}
              className={`aspect-video overflow-hidden rounded-lg cursor-pointer border-2 transition-colors ${
                index === currentIndex
                  ? "border-[#8D6E63] shadow-md"
                  : "border-transparent hover:border-[#8D6E63]/50"
              }`}
            >
              <img
                className={`w-full h-full object-cover transition-opacity ${
                  index === currentIndex ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
                src={image}
                alt={`${imageAlt} - Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

