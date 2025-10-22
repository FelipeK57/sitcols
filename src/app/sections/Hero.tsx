"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          try {
            await video.play();
          } catch (err) {
            console.debug("Video play() interrumpido:", err);
          }
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="grid place-content-center py-36 px-4 gap-6">
        <h1 className="text-5xl font-bold text-center leading-tight">
          El Software del mañana hecho para ti hoy
        </h1>
        <p className="text-center text-neutral-400">
          Construimos soluciones modernas de software, infraestructura y soporte
          para tu negocio.
        </p>
        <div className="flex justify-center w-fit mx-auto gap-4">
          <button className="btn-secondary">
            Ver proyectos
          </button>
          <button className="btn-primary">
            Contáctanos
          </button>
        </div>
      </section>
      <section className="flex justify-center py-20 px-4">
        <video
          ref={videoRef}
          src="/gif_sitcols.mp4"
          muted
          loop
          playsInline
          preload="none"
          className="rounded shadow w-full max-w-5xl"
          onPlay={(e) => e.currentTarget.classList.add("opacity-100")}
          onPause={(e) => e.currentTarget.classList.remove("opacity-100")}
        />
      </section>
    </>
  );
}
