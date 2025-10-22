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

const servicesWithPlans = ["Infraestructura", "Mantenimiento"];

const pricingPlans = [
  {
    title: "Infraestructura",
    plan: [
      {
        name: "Starter",
        price: "$30/mes",
        features: [
          "Servidor VPS básico",
          "Aloja unicamente sitios web estáticos",
          "Ideal para landing pages",
        ],
      },
      {
        name: "Business",
        price: "$50/mes",
        features: [
          "Servidor VPS estándar",
          "Aloja aplicaciones web ligeras y bases de datos medianas",
          "Ideal para CRM/ERP básicos, e-commerce pequeños o booking systems administrativos",
        ],
      },
      {
        name: "Enterprise",
        price: "$80/mes",
        features: [
          "Servidor VPS premium",
          "Aloja aplicaciones web complejas y bases de datos grandes",
          "Ideal para e-commerce con alto tráfico, CRM/ERP avanzados o booking systems con publicos",
        ],
      },
    ],
  },
  {
    title: "Mantenimiento",
    plan: [
      {
        name: "Starter",
        price: "$20/mes",
        features: [
          "Actualizaciones mensuales",
          "Backups semanales",
          "Soporte por email",
        ],
      },
      {
        name: "Business",
        price: "$50/mes",
        features: [
          "Básico +",
          "Soporte por email y chat",
          "Monitoreo de rendimiento",
        ],
      },
      {
        name: "Premium",
        price: "$100/mes",
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
  const [serviceClicked, setServiceClicked] = useState<string | null>(
    "Desarrollo web"
  );
  const [selectedServicePlan, setSelectedServicePlan] = useState<string | null>(
    "Infraestructura"
  );
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <>
      <section className="w-full max-w-6xl mx-auto py-16 px-4 space-y-6 ">
        <h2 className="font-semibold tracking-tight text-4xl text-center">
          Nuestros servicios
        </h2>
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
      <section className="w-full max-w-6xl mx-auto py-16 px-4 space-y-6">
        <h2 className="font-semibold tracking-tight text-2xl text-center">
          Planes y precios
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
            <div
              key={index}
              className={`grid ${
                plan.title === "Desarrollo web"
                  ? "md:grid-cols-3 xl:grid-cols-5"
                  : "md:grid-cols-3"
              } gap-6 mt-8`}
            >
              {plan.plan.map((p, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-4 mt-auto h-96 bg-neutral-900 border ${
                    i == 1
                      ? "border-primary border-3 md:scale-105"
                      : "border-neutral-800 md:scale-90"
                  } rounded-2xl p-6`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <div>
                      {i == 1 && (
                        <span className="text-sm rounded-2xl bg-primary px-4 py-1 font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-4xl font-bold">{p.price}</span>
                  <button className="btn-primary w-full">
                    Seleccionar plan
                  </button>
                  <div className="space-y-4 text-neutral-400">
                    {p.features.map((feature: any, j: any) => (
                      <div className="flex items-center gap-2 text-sm" key={j}>
                        <CheckCircle className="stroke-3 text-primary" />
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

// {
//       title: "Diseño",
//       plan: [
//         {
//           name: "Starter",
//           price: "$100",
//           features: ["Wireframes básicos", "Guía de estilo básica"],
//         },
//         {
//           name: "Premium",
//           price: "$200",
//           features: [
//             "Diseño UI/UX completo",
//             "Prototipo navegable",
//             "Guía de estilo avanzada",
//           ],
//         },
//         {
//           name: "Enterprise",
//           price: "Cotizar",
//           features: [
//             "Diseño a medida para grandes proyectos",
//             "Investigación de usuarios incluida",
//             "Soporte prioritario",
//           ],
//         },
//       ],
//     },
//     {
//       title: "Desarrollo web",
//       plan: [
//         {
//           name: "Landing Page",
//           price: "$500",
//           features: [
//             "Diseño responsivo",
//             "Integración básica",
//             "Despliegue en hosting",
//           ],
//         },
//         {
//           name: "CRM/ERP básico",
//           price: "$600",
//           features: [
//             "Gestión de clientes/productos",
//             "Panel administrativo",
//             "Autenticación de usuarios",
//           ],
//         },
//         {
//           name: "E-commerce",
//           price: "$800",
//           features: [
//             "Catálogo de productos",
//             "Carrito de compras",
//             "Pasarela de pago integrada",
//           ],
//         },
//         {
//           name: "Booking System",
//           price: "$700",
//           features: [
//             "Gestión de reservas",
//             "Notificaciones automáticas",
//             "Panel administrativo",
//           ],
//         },
//         {
//           name: "ERP a la medida",
//           price: "Cotizar",
//           features: [
//             "Solución integral adaptada a tu negocio",
//             "Módulos personalizados",
//             "Soporte y mantenimiento dedicado",
//           ],
//         },
//       ],
//     },
