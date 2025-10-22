"use client";

import { useState } from "react";
import { ChevronDown, Cloud, Code, Palette, Settings } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { motion, AnimatePresence } from "motion/react";
export default function Services() {
  const services = [
    {
      title: "Diseño",
      icon: <Palette className="size-12 text-primary" />,
      description:
        "Transformamos tus ideas en interfaces visuales atractivas, intuitivas y centradas en el usuario. Diseñamos y prototipamos experiencias digitales modernas que comunican tu marca y mejoran la interacción con tus clientes.",
    },
    {
      title: "Desarrollo web",
      icon: <Code className="size-12 text-primary" />,
      description:
        "Desarrollamos aplicaciones web escalables y de alto rendimiento, adaptadas a las necesidades de tu negocio. Desde landing pages hasta sistemas completos (CRM, ERP, e-commerce o booking systems), creamos soluciones confiables y listas para crecer contigo",
    },
    {
      title: "Infraestructura",
      icon: <Cloud className="size-12 text-primary" />,
      description:
        "Diseñamos e implementamos entornos de infraestructura seguros, rápidos y optimizados. Usamos tecnologías modernas como VPS, contenedores y servicios cloud para garantizar disponibilidad, velocidad y escalabilidad en todos tus proyectos.",
    },
    {
      title: "Mantenimiento",
      icon: <Settings className="size-12 text-primary" />,
      description:
        "Nos encargamos del soporte, actualizaciones y monitoreo de tus sistemas. Ofrecemos planes adaptados a cada necesidad: desde backups automáticos hasta soporte técnico, analítica y optimización continua de tus plataformas.",
    },
  ];
  const [serviceClicked, setServiceClicked] = useState<string | null>(null);
  const [selectedServicePlan, setSelectedServicePlan] = useState<string | null>(
    "Desarrollo web"
  );
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <>
      <section className="w-full max-w-6xl mx-auto py-16 px-4 space-y-6 ">
        <h2 className="font-semibold tracking-tight text-2xl text-center">
          Nuestros servicios
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              services={services}
              serviceClicked={serviceClicked}
              setServiceClicked={setServiceClicked}
            />
          ))}
        </div>
        {serviceClicked && (
          <div className="hidden md:block p-6 bg-neutral-900 border border-neutral-800 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">{serviceClicked}</h3>
            <p className="text-neutral-400">
              {services.find((service) => service.title === serviceClicked)
                ?.description || "Descripción no disponible."}
            </p>
          </div>
        )}
      </section>
      <section className="w-full max-w-6xl mx-auto py-16 px-4 space-y-6">
        <h2 className="font-semibold tracking-tight text-2xl text-center">
          Precios y planes
        </h2>
        <div className="relative space-y-2 w-fit mx-auto">
          <div
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            className="flex justify-between px-4 py-2 rounded-2xl mx-auto w-full min-w-64 bg-neutral-900 border border-neutral-800 text-neutral-400 cursor-pointer"
          >
            <div className="flex justify-between items-center w-full">
              <span className="select-none">
                {selectedServicePlan === null
                  ? "Selecciona un servicio"
                  : `${selectedServicePlan}`}
              </span>
              <ChevronDown
                className={`${
                  isSelectOpen ? "" : "rotate-90"
                } transition-all size-4`}
              />
            </div>
          </div>
          <AnimatePresence>
            {isSelectOpen && (
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.1 }}
                className="absolute z-10 bg-neutral-900 border border-neutral-800 rounded-2xl min-w-64 mx-auto w-full"
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedServicePlan(service.title);
                      setIsSelectOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-neutral-800 rounded-2xl cursor-pointer"
                  >
                    {service.title}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-full h-64 bg-neutral-900 border-neutral-700 rounded-2xl"></div>
      </section>
    </>
  );
}
