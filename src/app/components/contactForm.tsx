"use client";
import React, { useState, useCallback } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState<"success" | "error" | null>(
    null
  );
  const [isSending, setIsSending] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prevState) => ({ ...prevState, [id]: value }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const { nom, email, objet, message } = formData;
    if (!nom || !email || !objet || !message) {
      setResponseType("error");
      setResponseMessage("Tous les champs sont obligatoires.");
      return false;
    }
    return true;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;

      setIsSending(true);
      setResponseMessage("");
      setResponseType(null);

      try {
        // Charger le script reCAPTCHA si ce n'est pas déjà fait
        if (!window.grecaptcha) {
          setResponseType("error");
          setResponseMessage("CAPTCHA non chargé. Veuillez réessayer.");
          return;
        }

        // Obtenir le jeton reCAPTCHA
        const captchaToken = await window.grecaptcha.execute(
          "6Lf7C4sqAAAAAP1TtREMe-A2Us6-7KwuEV-rnISY",
          {
            action: "submit",
          }
        );

        // Envoyer les données du formulaire avec le jeton reCAPTCHA
        const response = await fetch(
          "https://portfolio-back-hn94.onrender.com/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              captchaToken, // Inclure le jeton
              from: "",
            }),
          }
        );

        const result = await response.json(); // Lecture de la réponse JSON

        if (response.ok) {
          setResponseType("success");
          setResponseMessage("Email envoyé avec succès !");
          setFormData({ nom: "", email: "", objet: "", message: "" });
        } else {
          setResponseType("error");
          setResponseMessage(`Erreur: ${result.message || "Erreur inconnue"}`);
        }
      } catch (error) {
        setResponseType("error");
        setResponseMessage("Erreur lors de l'envoi de l'email.");
        console.error("Erreur de connexion avec l'API:", error);
      } finally {
        setIsSending(false);
      }
    },
    [formData, validateForm]
  );

  const inputClass =
    "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

  return (
    <div className="flex items-center justify-center">
      <div className="h-screen p-6 rounded-lg w-full max-w-lg">
        <form onSubmit={handleSubmit}>
          {["nom", "email", "objet", "message"].map((field, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={field}
                className="block text-lg font-medium text-white"
              >
                {field === "message"
                  ? "Message"
                  : field.charAt(0).toUpperCase() + field.slice(1)}
                :
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  rows={5}
                  placeholder={`Votre ${field}`}
                  className={inputClass}
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={isSending}
                />
              ) : (
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Votre ${field}`}
                  className={inputClass}
                  onChange={handleChange}
                  disabled={isSending}
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-800 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={isSending}
          >
            {isSending ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
        {responseMessage && (
          <div
            className={`mt-4 text-center ${
              responseType === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {responseMessage}
          </div>
        )}
      </div>
    </div>
  );
}
