"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tMessages = useTranslations("contact.messages");
  const locale = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse("");
    setError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, locale }),
      });
      const data = await res.json();

      if (res.ok) {
        setResponse(tMessages("success")); // Traduit localement
      } else {
        const errorMsg = data.message || "error_email_send";
        const translatedError =
          tMessages(errorMsg.toLowerCase().replace(/ /g, "_")) || errorMsg;
        setError(translatedError);
      }
    } catch (err) {
      setError(tMessages("error_email_send")); // Fallback traduit
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-white mb-2">
            {t("name")}
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-lg font-medium text-white mb-2"
          >
            {t("email")}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-lg font-medium text-white mb-2"
          >
            {t("subject")}
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-lg font-medium text-white mb-2"
          >
            {t("message")}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          {t("send")}
        </button>
      </form>
      {response && (
        <p className="mt-6 text-center text-green-400 font-medium">
          {response}
        </p>
      )}
      {error && (
        <p className="mt-6 text-center text-red-400 font-medium">{error}</p>
      )}
    </div>
  );
}
