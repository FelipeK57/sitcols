"use client";

import { Check, ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState<boolean>(false);

  const reasonsForContact = [
    "Cotización de producto",
    "Contratar paquete",
    "Solicitar llamada",
    "Preguntas generales",
    "Propuesta de colaboración",
    "Otros",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: reasonSelected,
      message: formData.get("message"),
      phone: formData.get("phone"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
        }, 5000);
        setIsLoading(false);
        form.reset();
      } else {
        setSuccess(false);
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
        }, 5000);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje");
    }
  };

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
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-lg mx-auto w-full space-y-6"
      >
        <input
          name="name"
          required
          placeholder="Nombre"
          className="border w-full px-4 py-2 rounded-2xl border-neutral-800 bg-neutral-900 focus:outline-1 focus:outline-primary"
        />
        <input
          name="email"
          required
          placeholder="Correo electrónico"
          className="border w-full px-4 py-2 rounded-2xl border-neutral-800 bg-neutral-900 focus:outline-1 focus:outline-primary"
        />
        <input
          name="phone"
          required
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
                {reasonSelected === null ? (
                  "Selecciona el motivo"
                ) : (
                  <span className="text-white">{reasonSelected}</span>
                )}
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
          name="message"
          required
          placeholder="Mensaje"
          className="border w-full px-4 py-2 rounded-2xl border-neutral-800 bg-neutral-900 focus:outline-1 focus:outline-primary h-32 resize-none"
        />
        <button
          type="submit"
          disabled={isLoading ? true : false}
          className="w-full btn-primary py-3 rounded-2xl"
        >
          {isLoading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-10 bg-neutral-900/70 flex items-center justify-center overflow-hidden"
          >
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl max-w-sm text-center">
              <div className="flex items-center justify-center w-full">
                {success ? (
                  <Check className="text-green-600 size-18" />
                ) : (
                  <X className="text-rose-500 size-18" />
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {success ? "¡Mensaje enviado!" : "Error al enviar el mensaje"}
              </h3>
              <p className="text-neutral-400 text-sm">
                {success
                  ? "Gracias por contactarnos. Nos pondremos en contacto contigo pronto."
                  : "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente."}
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-4 btn-primary py-2 px-4 rounded-2xl"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
