import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = -1000;
    let mouseY = -1000;
    let trailingX = -1000;
    let trailingY = -1000;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      // Smooth subtle lerp
      trailingX += (mouseX - trailingX) * 0.12;
      trailingY += (mouseY - trailingY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${trailingX}px, ${trailingY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-[50] mix-blend-screen"
    />
  );
}
