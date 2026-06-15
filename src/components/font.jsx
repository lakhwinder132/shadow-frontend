import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const vertexShader = `
  uniform float amplitude;
  attribute vec3 displacement;
  attribute vec3 customColor;
  varying vec3 vColor;

  void main() {
    vColor = customColor;
    vec3 newPosition = position + amplitude * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 color;
  uniform float opacity;
  varying vec3 vColor;

  void main() {
    gl_FragColor = vec4(vColor * color, opacity);
  }
`;

export default function AnimatedText({ text = 'three.js' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer, line, uniforms, animationId;

    const camera = new THREE.PerspectiveCamera(
      30,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      1,
      10000
    );
    camera.position.z = 400;

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x050505);

    const loader = new FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_bold.typeface.json', (font) => {
      uniforms = {
        amplitude: { value: 5.0 },
        opacity: { value: 0.3 },
        color: { value: new THREE.Color() },

      };

      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
      });

      const geometry = new TextGeometry(text, {
        font,
        size: 50,
        depth: 15,
        curveSegments: 10,
        bevelThickness: 5,
        bevelSize: 1.5,
        bevelEnabled: true,
        bevelSegments: 10,
      });

      geometry.center();

      const count = geometry.attributes.position.count;

      const displacement = new THREE.Float32BufferAttribute(count * 3, 3);
      geometry.setAttribute('displacement', displacement);

      const customColor = new THREE.Float32BufferAttribute(count * 3, 3);
      geometry.setAttribute('customColor', customColor);

      const color = new THREE.Color();
      for (let i = 0; i < customColor.count; i++) {
        color.setHSL(i / customColor.count, 0.5, 0.5);
        color.toArray(customColor.array, i * customColor.itemSize);
      }

      line = new THREE.Line(geometry, shaderMaterial);
      line.rotation.x = 0.2;
      scene.add(line);

      renderer = new THREE.WebGLRenderer({ antialias: true,alpha:true });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
      containerRef.current.appendChild(renderer.domElement);
      renderer.domElement.style.background = 'transparent';

      function animate() {
        animationId = requestAnimationFrame(animate);

        const time = Date.now() * 0.001;
        // line.rotation.y = 0.25 * time;
        uniforms.amplitude.value = Math.sin(0.5 * time);
        uniforms.color.value.offsetHSL(0.0005, 0, 0);

        const array = line.geometry.attributes.displacement.array;
        for (let i = 0; i < array.length; i += 3) {
          array[i] += 0.3 * (0.5 - Math.random());
          array[i + 1] += 0.3 * (0.5 - Math.random());
          array[i + 2] += 0.3 * (0.5 - Math.random());
        }
        line.geometry.attributes.displacement.needsUpdate = true;

        renderer.render(scene, camera);
      }

      animate();
    });

    function onWindowResize() {
      if (!containerRef.current) return;
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    }

    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onWindowResize);
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, [text]);

  return <div ref={containerRef} className="w-full h-full bg-transparent" />;
}