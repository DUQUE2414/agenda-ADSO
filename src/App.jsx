import { useState, useEffect } from "react";
import "./App.css";
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
    <main className="app-container">
      <h1 className="app-title">Agenda ADSO v3</h1>
      <p className="subtitulo">Persistencia con localStorage + UI moderna</p>

      <FormularioContacto onAgregar={agregarContacto} />

      <section className="lista-contactos">
        {contactos.map((c) => (
          <ContactoCard key={c.id} {...c} onEliminar={eliminarContacto} />
        ))}
      </section>
    </main>
  );
}