export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full max-w-6xl mx-auto border-t border-neutral-800 py-8 px-4 mt-20">
        <span className="text-sm text-neutral-500">
          © {new Date().getFullYear()} SITCOLS. Todos los derechos reservados.
        </span>
    </footer>
  );
}
