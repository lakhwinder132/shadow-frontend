import { useEffect, useRef } from "react";
import About1 from "./pages/about.jsx";
import Testimonials from "./pages/testimonials.jsx";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

export default function About() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;

    async function initVanta() {
      await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
      await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js");

      const VANTA = window.VANTA;
      if (vantaRef.current && VANTA?.NET) {
        effect = VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        scale: 1.0,
        scaleMobile: 0.5,        // ← shrinks the effect on mobile (less dense)
        color: 0x3366ff,         // ← net line color (pick one that contrasts your content)
        backgroundColor: 0x0a0a0a, // ← background color (match your page bg)
        points: 8.0,             // ← fewer points = less dense network (default is ~10)
        maxDistance: 20.0,       // ← shorter lines = less clutter (default ~25)
        spacing: 18.0,           // ← more spacing between points (default ~15)
      });
      }
    }

    initVanta();

    return () => {
      if (effect && typeof effect.destroy === "function") {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Vanta background — fixed, behind everything */}
      <div
        ref={vantaRef}
        className="fixed top-0 left-0 w-screen h-screen -z-10"
      />

      {/* Content sits above the background */}
      <div className="relative z-10">
        <About1 />
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}