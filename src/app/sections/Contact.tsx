"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const reasonsForContact = [
    "Cotización de producto",
    "Contratar paquete",
    "Solicitar llamada",
    "Preguntas generales",
    "Propuesta de colaboración",
    "Otros",
  ];

  const [reasonSelected, setReasonSelected] = useState<string | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  return (
    <section id="contacto" className="py-20 max-w-6xl mx-auto px-4 space-y-6">
      <h2 className="font-semibold tracking-tight text-4xl text-center">
        Contactanos
      </h2>
      <p className="text-center max-w-xl mx-auto text-neutral-400">
        ¿Tienes alguna pregunta o quieres trabajar con nosotros? Envíanos un
        mensaje y nos pondremos en contacto contigo lo antes posible.
      </p>
      <form className="max-w-lg mx-auto w-full space-y-6">
        <input
          placeholder="Nombre"
          className="border w-full px-4 py-2 rounded-2xl border-neutral-800 bg-neutral-900 focus:outline-1 focus:outline-primary"
        />
        <input
          placeholder="Correo electrónico"
          className="border w-full px-4 py-2 rounded-2xl border-neutral-800 bg-neutral-900 focus:outline-1 focus:outline-primary"
        />
        <input
          placeholder="Celular"
          className="border w-full px-4 py-2 rounded-2xl border-neutral-800 bg-neutral-900 focus:outline-1 focus:outline-primary"
        />
        <div className="relative space-y-2 w-full mx-auto">
          <div
            onClick={() => setIsSelectOpen(!isSelectOpen)}
            className="flex justify-between px-4 py-2 rounded-2xl mx-auto w-full border border-neutral-800 bg-neutral-900 text-neutral-400 cursor-pointer"
          >
            <div className="flex justify-between items-center w-full">
              <span className="select-none">
                {reasonSelected === null
                  ? "Selecciona el motivo"
                  : `${reasonSelected}`}
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
                {reasonsForContact.map((reason, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setReasonSelected(reason);
                      setIsSelectOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-neutral-800 rounded-2xl cursor-pointer"
                  >
                    {reason}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <textarea
          placeholder="Mensaje"
          className="border w-full px-4 py-2 rounded-2xl border-neutral-800 bg-neutral-900 focus:outline-1 focus:outline-primary h-32 resize-none"
        />
        <button className="w-full btn-primary py-3 rounded-2xl">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
