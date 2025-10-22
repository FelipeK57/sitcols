import { motion, AnimatePresence } from "motion/react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  services: any[];
  serviceClicked: string | null;
  setServiceClicked: (title: string | null) => void;
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
        className={`flex flex-col gap-4 items-center justify-center bg-neutral-900 border border-neutral-800 rounded-2xl px-4 py-8 transition-all ${
          serviceClicked === title
            ? "border-primary scale-105"
            : serviceClicked !== null
            ? "opacity-40 cursor-not-allowed"
            : ""
        }`}
      >
        {icon}
        <h2 className="font-semibold text-lg text-center">{title}</h2>
        <button
          disabled={serviceClicked !== null && serviceClicked !== title}
          onClick={() => {
            if (serviceClicked === title) {
              setServiceClicked(null);
            } else {
              setServiceClicked(title);
            }
          }}
          className={`text-sm ${
            serviceClicked === title ? "btn-secondary" : "btn-primary"
          }`}
        >
          {serviceClicked === title ? "Cerrar detalles" : "Ver detalles"}
        </button>
      </div>
      {serviceClicked === title && (
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="block md:hidden p-6 bg-neutral-900 border border-neutral-800 rounded-2xl"
          >
            {(() => {
              const service = services.find((s) => s.title === serviceClicked);
              if (!service) return <p>Descripción no disponible.</p>;

              return (
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 mb-6">{service.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">
                        Dirigido a
                      </h4>
                      <p className="text-neutral-400">{service.directedTo}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">
                        Beneficios
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-neutral-400">
                        {service.benefits.map((item: any, i: any) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-200 mb-1">
                        Entregables
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-neutral-400">
                        {service.deliverables.map((item: any, i: any) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
