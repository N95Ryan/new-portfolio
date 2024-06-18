"use client";
import { useState } from 'react';

export function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [statusMessage, setStatusMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const result = await response.json();
            if (result.success) {
                setStatusMessage({ type: 'success', text: 'Votre email a été envoyé avec succès !' });
                setFormState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setStatusMessage({ type: 'error', text: 'Échec de l\'envoi de l\'email. Veuillez réessayer.' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatusMessage({ type: 'error', text: 'Une erreur est survenue. Veuillez réessayer plus tard.' });
        }
    };

    return (
        <div className="h-screen">
            <div className="pt-10 md:pt-20">
                <div className="p-4 md:p-8">
                    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                        <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                            <div className="flex flex-col md:flex-row">
                                <input id="name" type="text" value={formState.name} onChange={handleInputChange}
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="Votre nom" />
                                <input id="email" type="email" value={formState.email} onChange={handleInputChange}
                                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder="E-mail" />
                            </div>
                            <input id="subject" type="text" value={formState.subject} onChange={handleInputChange} placeholder="Objet"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-indigo-600" />
                            <textarea id="message" rows={5} value={formState.message} onChange={handleInputChange} placeholder="Votre message"
                                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-indigo-600"></textarea>
                        </div>
                        <button type="submit"
                            className="text-md mt-5 rounded-md py-4 px-8 bg-indigo-600 hover:bg-indigo-800 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600">
                            Envoyer
                        </button>
                    </form>
                    {statusMessage && (
                        <div className={`mt-4 p-4 rounded-lg mx-auto w-full max-w-lg text-center font-semibold ${statusMessage.type === 'success' ? 'bg-white text-green-600' : 'bg-white text-red-600'}`}>
                            {statusMessage.text}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
