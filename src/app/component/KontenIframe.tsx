'use client';

import { useEffect, useRef, useState } from 'react';

type KontenIframeProps = {
  src: string;
  title: string;
  height?: string;
};

export default function KontenIframe({ src, title, height = '500px' }: KontenIframeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ height, position: 'relative', overflow: 'hidden' }}
    >
      {isVisible ? (
        <iframe
          src={src}
          title={title}
          className="w-full h-full border rounded"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          loading="eager"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-50">
          Memuat preview...
        </div>
      )}
    </div>
  );
}
