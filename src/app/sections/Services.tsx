"use client";

import { useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  Cloud,
  Code,
  Palette,
  Settings,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { motion, AnimatePresence } from "motion/react";
const services = [
  {
    title: "Diseño",
    icon: <Palette className="size-12 text-primary" />,
    description:
      "Transformamos tus ideas en interfaces visuales atractivas, intuitivas y centradas en el usuario. Diseñamos y prototipamos experiencias digitales modernas que comunican tu marca y mejoran la interacción con tus clientes.",
    directedTo:
      "Empresas, startups o emprendedores que necesitan una identidad visual digital clara y moderna antes de comenzar el desarrollo.",
    deliverables: [
      "Diseño UI/UX en Figma o similar",
      "Prototipo navegable",
      "Guía visual con colores, tipografía y componentes",
    ],
    benefits: [
      "Acelera el desarrollo al tener una base sólida",
      "Mejora la experiencia del usuario final",
      "Refuerza la identidad de tu marca en cada pantalla",
    ],
  },
  {
    title: "Desarrollo web",
    icon: <Code className="size-12 text-primary" />,
    description:
      "Creamos soluciones web a medida — desde landing pages hasta plataformas completas (CRM, ERP, e-commerce o booking systems). Desarrollamos con tecnologías modernas para garantizar rendimiento, escalabilidad y una experiencia fluida.",
    directedTo:
      "Negocios que buscan digitalizar sus procesos, vender online o escalar con sistemas personalizados.",
    deliverables: [
      "Aplicación web funcional y responsive",
      "Código limpio y documentado",
      "Integraciones (APIs, pasarelas de pago, etc.)",
      "Despliegue en hosting o servidor configurado",
    ],
    benefits: [
      "Digitaliza tu negocio y mejora la eficiencia",
      "Escalable a medida que creces",
      "Soporte y mantenimiento garantizado",
    ],
  },
  {
    title: "Infraestructura",
    icon: <Cloud className="size-12 text-primary" />,
    description:
      "Implementamos entornos de infraestructura optimizados, seguros y listos para producción. Nos encargamos del hosting, despliegue y monitoreo para que tu software funcione sin interrupciones.",
    directedTo:
      "Empresas que requieren estabilidad, rendimiento y control sobre sus entornos cloud o VPS.",
    deliverables: [
      "Configuración de servidores (VPS o cloud)",
      "Despliegue automatizado",
      "Certificados SSL y dominio configurado",
      "Monitoreo y backups iniciales",
    ],
    benefits: [
      "Máximo rendimiento y seguridad",
      "Escalabilidad según la demanda",
      "Ahorro en costos y mantenimiento técnico",
    ],
  },
  {
    title: "Mantenimiento",
    icon: <Settings className="size-12 text-primary" />,
    description:
      "Nos ocupamos del soporte, actualizaciones, seguridad y monitoreo continuo de tus sistemas. Con planes flexibles adaptados a tus necesidades, aseguramos la continuidad de tu negocio digital.",
    directedTo:
      "Empresas o proyectos activos que necesitan mantener sus sistemas seguros, actualizados y optimizados sin preocuparse por la parte técnica.",
    deliverables: [
      "Backups periódicos",
      "Actualizaciones de software y dependencias",
      "Soporte técnico según el plan elegido",
      "Reportes de rendimiento y analítica",
    ],
    benefits: [
      "Continuidad operativa sin interrupciones",
      "Seguridad reforzada y prevención de fallos",
      "Soporte técnico confiable y cercano",
    ],
  },
];
const webDevelopmentServices = [
  {
    title: "Landing pages",
    description:
      "Páginas web diseñadas para captar la atención y convertir visitantes en clientes.",
    minPrice: "$1.000.000",
    estimatedTime: "2-4 semanas",
  },
  {
    title: "Sistemas CRM",
    description:
      "Plataformas personalizadas para gestionar relaciones con clientes y recursos empresariales.",
    minPrice: "$1.600.000",
    estimatedTime: "4-6 semanas",
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online optimizadas para ofrecer una experiencia de compra fluida y segura.",
    minPrice: "$2.200.000",
    estimatedTime: "6-8 semanas",
  },
  {
    title: "Sistemas de reservas",
    description:
      "Plataformas para gestionar reservas y citas de manera eficiente.",
    minPrice: "$2.800.000",
    estimatedTime: "8-10 semanas",
  },
  {
    title: "Sistemas ERP",
    description:
      "Soluciones integrales para la gestión de procesos empresariales y recursos internos.",
    minPrice: "$3.400.000",
    estimatedTime: "10-12 semanas",
  },
  {
    title: "Aplicaciones web a medida",
    description:
      "Soluciones personalizadas adaptadas a las necesidades específicas de tu negocio.",
    minPrice: "Desde $5.000.000",
    estimatedTime: "Variable según requerimientos",
  },
];
const designServices = [
  {
    title: "Diseño UI/UX básico",
    description:
      "Diseño de interfaces simples para landing pages o aplicaciones con funcionalidades limitadas.",
    minPrice: "$800.000",
    estimatedTime: "2-3 semanas",
  },
  {
    title: "Diseño UI/UX avanzado",
    description:
      "Diseño completo de interfaces para aplicaciones complejas con múltiples funcionalidades e interacciones.",
    minPrice: "$1.600.000",
    estimatedTime: "4-6 semanas",
  },
];

const servicesWithPlans = ["Infraestructura", "Mantenimiento"];
const serviceWithoutPlans = ["Diseño", "Desarrollo web"];

const pricingPlans = [
  {
    title: "Infraestructura",
    plan: [
      {
        name: "Starter",
        price: "$79.900/mes",
        features: [
          "Servidor VPS básico",
          "Configuración de dominio y SSL",
          "Aloja aplicaciones web simples y bases de datos pequeñas",
          "Ideal para aplicaciones web con bajo tráfico",
        ],
      },
      {
        name: "Business",
        price: "$99.900/mes",
        features: [
          "Servidor VPS estándar",
          "Configuración de dominio y SSL",
          "Aloja aplicaciones web medianas y bases de datos medianas",
          "Ideal para aplicaciones web con tráfico moderado",
        ],
      },
      {
        name: "Enterprise",
        price: "$179.000/mes",
        features: [
          "Servidor VPS premium",
          "Configuración de dominio y SSL",
          "Aloja aplicaciones web complejas y bases de datos grandes",
          "Ideal para aplicaciones web con alta demanda y tráfico intenso",
        ],
      },
    ],
  },
  {
    title: "Mantenimiento",
    plan: [
      {
        name: "Starter",
        price: "$79.900/mes",
        features: [
          "Actualizaciones mensuales",
          "Backups semanales",
          "Soporte por email",
        ],
      },
      {
        name: "Business",
        price: "$199.900/mes",
        features: [
          "Básico +",
          "Soporte por email y chat",
          "Monitoreo de rendimiento",
        ],
      },
      {
        name: "Premium",
        price: "$399.000/mes",
        features: [
          "Business +",
          "Soporte 24/7",
          "Consultoría técnica dedicada",
        ],
      },
    ],
  },
];

export default function Services() {
  const [serviceClicked, setServiceClicked] = useState<string | null>(null);
  const [selectedServicePlan, setSelectedServicePlan] = useState<string | null>(
    "Infraestructura"
  );
  const [selectedServiceWithoutPlan, setSelectedServiceWithoutPlan] = useState<
    string | null
  >("Desarrollo web");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isSelectServiceOpen, setIsSelectServiceOpen] = useState(false);

  return (
    <>
      <section
        id="servicios"
        className="w-full max-w-6xl mx-auto py-20 px-4 space-y-6 "
      >
        <h2 className="font-semibold tracking-tight text-4xl text-center">
          Nuestros servicios
        </h2>
        <p className="text-center max-w-xl mx-auto text-neutral-400">
          Basados en el ciclo de vida del software, ofrecemos servicios
          personalizados para satisfacer las necesidades únicas de tu negocio.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
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
        <AnimatePresence>
          {serviceClicked && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="hidden md:block p-6 bg-neutral-900 border border-neutral-800 rounded-2xl"
            >
              {(() => {
                const service = services.find(
                  (s) => s.title === serviceClicked
                );
                if (!service) return <p>Descripción no disponible.</p>;

                return (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 mb-6">
                      {service.description}
                    </p>

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
                          {service.benefits.map((item, i) => (
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
          )}
        </AnimatePresence>
      </section>
      <section className="w-full max-w-6xl mx-auto py-20 px-4 space-y-6">
        <h2 className="font-semibold tracking-tight text-2xl text-center">
          Soluciones a medida
        </h2>
        <p className="text-center max-w-xl mx-auto text-neutral-400">
          Nuestra especialidad es desarrollar soluciones personalizadas que se
          adapten perfectamente a las necesidades de tu negocio.
        </p>
        <div className="relative space-y-2 w-fit mx-auto">
          <div
            onClick={() => setIsSelectServiceOpen(!isSelectServiceOpen)}
            className="flex justify-between px-4 py-2 rounded-2xl mx-auto w-full min-w-64 bg-neutral-900 border border-neutral-800 text-neutral-400 cursor-pointer"
          >
            <div className="flex justify-between items-center w-full">
              <span className="select-none">
                {selectedServiceWithoutPlan === null
                  ? "Selecciona un servicio"
                  : `${selectedServiceWithoutPlan}`}
              </span>
              <ChevronDown
                className={`${
                  isSelectServiceOpen ? "" : "rotate-90"
                } transition-all size-4`}
              />
            </div>
          </div>
          <AnimatePresence>
            {isSelectServiceOpen && (
              <motion.div
                initial={{ y: -10, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -10, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="absolute z-10 bg-neutral-900 border border-neutral-800 rounded-2xl min-w-64 mx-auto w-full"
              >
                {serviceWithoutPlans.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedServiceWithoutPlan(service);
                      setIsSelectServiceOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-neutral-800 rounded-2xl cursor-pointer"
                  >
                    {service}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {selectedServiceWithoutPlan === "Desarrollo web" ? (
          <div className="grid md:grid-cols-2 gap-4">
            {webDevelopmentServices.map((service, index) => (
              <article
                key={index}
                className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2"
              >
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
                <p className="text-lg font-semibold">
                  Desde: {service.minPrice}
                </p>
                <p className="text-sm text-neutral-400">
                  Tiempo estimado: {service.estimatedTime}
                </p>
                <button className="btn-primary text-sm">
                  Solicitar cotización
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {designServices.map((service, index) => (
              <article
                key={index}
                className="p-6 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-2"
              >
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p className="text-neutral-400">{service.description}</p>
                <p className="text-lg font-semibold">
                  Desde: {service.minPrice}
                </p>
                <p className="text-sm text-neutral-400">
                  Tiempo estimado: {service.estimatedTime}
                </p>
                <button className="btn-primary text-sm">
                  Solicitar cotización
                </button>
              </article>
            ))}
          </div>
        )}
        <p className="max-w-xl mx-auto text-xs text-neutral-400 text-center">
          *Los precios y tiempos dependen de los requisitos y complejidad del
          proyecto, son de pago unico y tienen distintas formas de pago.*
        </p>
      </section>
      <section
        id="planes"
        className="w-full max-w-6xl mx-auto py-20 px-4 space-y-6"
      >
        <h2 className="font-semibold tracking-tight text-2xl text-center">
          Planes y precios
        </h2>
        <p className="text-center max-w-xl mx-auto text-neutral-400">
          De la mano de nuestras soluciones a medida, te ofrecemos planes
          flexibles que se adaptan a las necesidades específicas de tu negocio.
        </p>
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
                initial={{ y: -10, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -10, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="absolute z-10 bg-neutral-900 border border-neutral-800 rounded-2xl min-w-64 mx-auto w-full"
              >
                {servicesWithPlans.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedServicePlan(service);
                      setIsSelectOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-neutral-800 rounded-2xl cursor-pointer"
                  >
                    {service}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {pricingPlans
          .filter((plan) => plan.title === selectedServicePlan)
          .map((plan, index) => (
            <div key={index} className={`grid lg:grid-cols-3 gap-4 mt-8`}>
              {plan.plan.map((p, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-4 mt-auto bg-neutral-900 border ${
                    i == 1
                      ? "border-primary border-3 lg:scale-105 min-h-96"
                      : "border-neutral-800 lg:scale-90 h-full max-h-96"
                  } rounded-2xl p-6`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold">{p.name}</h3>
                    <div className="flex items-center">
                      {i == 1 && (
                        <span className="text-sm rounded-2xl bg-primary/20 text-primary px-4 py-1 font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-3xl xl:text-4xl font-bold">
                    {p.price}
                  </span>
                  <button className="btn-primary text-sm w-full">
                    Seleccionar plan
                  </button>
                  <div className="space-y-4 text-neutral-400">
                    {p.features.map((feature: any, j: any) => (
                      <div className="flex items-center gap-2 text-sm" key={j}>
                        <CheckCircle className="size-5 text-primary" />
                        <span className="w-full">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
      </section>
    </>
  );
}
