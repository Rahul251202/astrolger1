import React, { useRef, useEffect } from "react";

const images = [
  "https://source.unsplash.com/random/800x600?nature1",
  "https://source.unsplash.com/random/800x600?nature2",
  "https://source.unsplash.com/random/800x600?nature3",
  "https://source.unsplash.com/random/800x600?nature4",
];

export default function MirrorScroll() {
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const mirrorScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mirrorScrollRef.current && mainScrollRef.current) {
        mirrorScrollRef.current.scrollTop = mainScrollRef.current.scrollTop;
      }
    };

    const scrollEl = mainScrollRef.current;
    scrollEl?.addEventListener("scroll", handleScroll);

    return () => {
      scrollEl?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-900 overflow-hidden gap-16">
      {/* Main Scrollable Column */}
      <div
        ref={mainScrollRef}
        className="z-10 h-[80vh] w-72 overflow-y-auto space-y-4 p-2 bg-white/5 rounded-xl shadow-lg"
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`main-${idx}`}
            className="w-full rounded-xl shadow-md"
          />
        ))}
      </div>

      {/* Mirror Effect Column */}
      <div
        ref={mirrorScrollRef}
        className="absolute left-1/2 translate-x-20 h-[80vh] w-72 overflow-y-hidden space-y-4 p-2 pointer-events-none transform -skew-y-3 rotate-2 bg-white/5 border-l border-white/20 backdrop-blur-md shadow-inner rounded-xl"
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`mirror-${idx}`}
            className="w-full rounded-xl opacity-60"
          />
        ))}
      </div>
    </div>
  );
}
