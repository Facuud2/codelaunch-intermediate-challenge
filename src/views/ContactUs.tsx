
import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Simulación de envío
    setTimeout(() => {
      setLoading(false);
      if (form.name && form.email && form.message) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Por favor, completa todos los campos.");
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md px-10 py-12 rounded-3xl shadow-2xl border border-slate-200 flex flex-col gap-7 relative"
        >
          <div className="flex flex-col items-center mb-2">
            <div className="bg-blue-100 rounded-full p-3 mb-2 shadow-sm">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-.66 1.591l-7.5 7.5a2.25 2.25 0 01-3.18 0l-7.5-7.5A2.25 2.25 0 012.25 7.743V7.5"/></svg>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 text-center tracking-tight mb-1">Contáctanos</h2>
            <p className="text-slate-500 text-sm text-center">¿Tienes dudas o sugerencias? ¡Escríbenos!</p>
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-slate-700 font-medium flex flex-col gap-1">
              Nombre
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-slate-300 bg-slate-50 text-base outline-none focus:border-blue-500 focus:bg-white transition-colors shadow-sm"
              />
            </label>
            <label className="text-slate-700 font-medium flex flex-col gap-1">
              Correo electrónico
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="ejemplo@email.com"
                className="mt-1 w-full px-4 py-2 rounded-xl border border-slate-300 bg-slate-50 text-base outline-none focus:border-blue-500 focus:bg-white transition-colors shadow-sm"
              />
            </label>
            <label className="text-slate-700 font-medium flex flex-col gap-1">
              Mensaje
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Escribe tu mensaje..."
                className="mt-1 w-full px-4 py-2 rounded-xl border border-slate-300 bg-slate-50 text-base outline-none focus:border-blue-500 focus:bg-white transition-colors shadow-sm resize-none"
              />
            </label>
          </div>
          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-red-700 rounded-lg px-4 py-2 border border-red-200 text-sm font-medium animate-shake shadow-sm">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-lg px-4 py-2 border border-emerald-200 text-sm font-medium animate-fade-in shadow-sm">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#059669" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              <span>¡Mensaje enviado!</span>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className={`mt-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold text-base rounded-xl py-2 shadow-lg transition-colors duration-200 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin" width="18" height="18" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="#fff" strokeWidth="4"></circle><path className="opacity-75" fill="#fff" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
                Enviando...
              </span>
            ) : (
              "Enviar mensaje"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;