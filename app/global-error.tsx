"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
        <div className="relative flex min-h-screen w-full flex-col">
          <div className="flex-grow flex items-center justify-center px-4">
            <div className="text-center max-w-lg">
              <h1 className="text-primary dark:text-secondary text-5xl sm:text-6xl md:text-7xl font-handwriting font-bold leading-tight pb-4">
                Oops! Something went wrong.
              </h1>
              <p className="text-text-light dark:text-text-dark text-base font-normal leading-normal pb-6">
                An unexpected error occurred. We&apos;ve been notified and are looking into it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={reset}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
                >
                  <span className="truncate">Try Again</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
