interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  services: any[];
  serviceClicked: string | null;
  setServiceClicked: (title: string) => void;
}

export default function ServiceCard({
  title,
  icon,
  services,
  serviceClicked,
  setServiceClicked,
}: ServiceCardProps) {
  return (
    <>
      <div
        onClick={() => setServiceClicked(title)}
        className={`flex flex-col gap-4 items-center justify-center bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-8 cursor-pointer hover:scale-105 transition-all ${
          serviceClicked === title
            ? "border-primary"
            : serviceClicked !== null
            ? "blur-xs hover:blur-none"
            : ""
        }`}
      >
        {icon}
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
      {serviceClicked === title && (
        <div className="block md:hidden p-6 bg-neutral-900 border border-neutral-800 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">{serviceClicked}</h3>
          <p className="text-neutral-400">
            {services.find((service) => service.title === serviceClicked)
              ?.description || "Descripción no disponible."}
          </p>
        </div>
      )}
    </>
  );
}
