"use client";
import React, { useState, useCallback } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');
  const [isSending, setIsSending] = useState(false); // Indicateur de chargement

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true); // Démarre le chargement
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Email envoyé avec succès !');
      } else {
        setResponseMessage(`Erreur: ${result.message}`);
      }
    } catch (error) {
      setResponseMessage("Erreur lors de l'envoi de l'email");
    } finally {
      setIsSending(false); // Termine le chargement
    }
  }, [formData]);

  const inputClass = "my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-indigo-600";

  const renderInputField = (id: string, type: string, placeholder: string, value: string) => (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={inputClass}
      value={value}
      onChange={handleChange}
      disabled={isSending} // Désactiver les champs pendant l'envoi
    />
  );

  return (
    <div className="h-screen">
      <div className="pt-10 md:pt-20">
        <div className="p-4 md:p-8">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
              <div className="flex flex-col md:flex-row">
                {renderInputField("name", "text", "Votre nom", formData.name)}
                {renderInputField("email", "email", "E-mail", formData.email)}
              </div>
              {renderInputField("subject", "text", "Objet", formData.subject)}
              <textarea
                id="message"
                rows={5}
                placeholder="Votre message"
                className={inputClass}
                value={formData.message}
                onChange={handleChange}
                disabled={isSending} // Désactiver le champ pendant l'envoi
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-md mt-5 rounded-md py-4 px-8 bg-indigo-600 hover:bg-indigo-800 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600"
              disabled={isSending} // Désactiver le bouton pendant l'envoi
            >
              {isSending ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
          {responseMessage && (
            <div className="mt-4 text-center text-gray-100">
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
