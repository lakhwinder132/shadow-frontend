import { useState } from "react";
import AnimationFont from "./../components/font.jsx";

const images = [
  { src: "/gallery/1.png", alt: "Gallery image 1" },
  { src: "/gallery/2.png", alt: "Gallery image 2" },
  { src: "/gallery/3.png", alt: "Gallery image 3" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null); // index of open image

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i + 1) % images.length);

  return (
    <div className="bg-black/60 backdrop-blur-[2px]  rounded-xl px-6 py-12 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-[#3366ff] font-medium mb-2">
          Moments captured
        </p>
        <div className="flex justify-center h-[80px] items-center">
          <AnimationFont text="GALLERY" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-2xl border border-[#3366ff]/20 cursor-pointer transition-all duration-300 hover:border-[#3366ff]/50 hover:-translate-y-1"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#3366ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-white/70 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm0 0l0 0" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Image */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition text-lg"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition text-lg"
          >
            ›
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === lightbox ? "bg-[#3366ff] w-5" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}