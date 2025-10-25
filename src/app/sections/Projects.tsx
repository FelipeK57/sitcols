export default function Projects() {
  return (
    <section id="portafolio" className="py-36 px-4 space-y-6">
      <h2 className="font-semibold tracking-tight text-4xl text-center col-span-full">
        Nuestro portafolio
      </h2>
      <p className="text-center max-w-xl mx-auto text-neutral-400">
        Explora algunos de nuestros proyectos destacados que demuestran nuestra
        experiencia y compromiso con la calidad.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div id="col1" className="space-y-6">
          <img
            src={"col1/aipaper.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col1/afhservices.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col1/products.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col1/contact.png"}
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <div id="col2" className="space-y-6">
          <img
            src={"col2/heroafh.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col2/hero.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col2/graphics.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col2/features.png"}
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <div id="col3" className="space-y-6">
          <img
            src={"col3/heroecommerce.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col3/dashboard.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col3/reviews.png"}
            className="w-full rounded-2xl object-cover"
          />
          <img
            src={"col3/contactaipaper.png"}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
