import Image from "next/image";
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
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Inicio
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Servicios
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Proyectos
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 transition-all"
          >
            Nosotros
          </a>
        </nav>
        <button className="bg-primary px-4 py-2 rounded-4xl hover:bg-primary/80 transition-all active:scale-95 cursor-pointer">
          Solicitar llamada
        </button>
      </div>
    </header>
  );
}
