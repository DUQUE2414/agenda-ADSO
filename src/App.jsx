import { useState, useEffect } from "react";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  const [contactos, setContactos] = useState(() => {
    const guardados = localStorage.getItem("contactos");
    return guardados ? JSON.parse(guardados) : [];
  });

  // Persistencia en localStorage ante cambios en el estado
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    // Se asigna un id único a cada contacto
    const contactoConId = { ...nuevo, id: crypto.randomUUID() };
    setContactos((prev) => [...prev, contactoConId]);
  };

  const eliminarContacto = (id) => {
    setContactos((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <main className="min-h-screen py-10 px-4">

        {  /* Título centrado con color morado */}
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
          Agenda ADSO v3
        </h1>


        {/* Tarjeta del formulario */}
        <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
          <FormularioContacto onAgregar={agregarContacto} />
        </section>
        {/* Lista de contactos */}
        <section className="space-y-4">
          {contactos.map((c) => (
            <ContactoCard
              key={c.id}
              {...c}
              onEliminar={eliminarContacto}
            />
          ))}
        </section>
      </main>
    </div>

  );
}