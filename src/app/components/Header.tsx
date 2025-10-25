"use client";
import Image from "next/image";
import { scrollSmoth } from "../utils/scrollSmoth";
export default function Header() {
  return (
    <header className="sticky w-full top-0 z-10 p-4 bg-background/5 backdrop-blur-md">
      <div className="flex justify-between w-full max-w-7xl mx-auto">
        <article className="flex gap-2 items-center text-2xl">
          <Image
            src="/sitcols-logo.svg"
            alt="Sitcols Logo"
            width={40}
            height={40}
          />
          <span className="font-bold tracking-tight">SITCOLS.</span>
        </article>
        <nav className="hidden md:flex justify-between items-center max-w-sm w-full">
          <p
            onClick={() => scrollSmoth("inicio")}
            className="hover:underline underline-offset-4 transition-all"
          >
            Inicio
          </p>
          <p
            onClick={() => scrollSmoth("servicios")}
            className="hover:underline underline-offset-4 transition-all"
          >
            Servicios
          </p>
          <p
            onClick={() => scrollSmoth("planes")}
            className="hover:underline underline-offset-4 transition-all"
          >
            Planes
          </p>
          <p
            onClick={() => scrollSmoth("portafolio")}
            className="hover:underline underline-offset-4 transition-all"
          >
            Portafolio
          </p>
        </nav>
        <button onClick={() => scrollSmoth("contacto")} className="btn-primary">
          Contactanos
        </button>
      </div>
    </header>
  );
}
