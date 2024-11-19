package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"gopkg.in/mail.v2"
)

type EmailRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

func sendEmail(req *EmailRequest) error {
	// Configurez les informations de votre serveur SMTP (exemple avec Mailgun, Mailjet, etc.)
	m := mail.NewMessage()

	m.SetHeader("From", "votre-email@example.com")
	m.SetHeader("To", "destinataire@example.com")
	m.SetHeader("Subject", req.Subject)
	m.SetBody("text/html", fmt.Sprintf("<p><b>Name:</b> %s</p><p><b>Email:</b> %s</p><p><b>Message:</b> %s</p>", req.Name, req.Email, req.Message))

	// Paramètres de configuration de l'email
	d := mail.NewDialer("smtp.example.com", 587, "votre-email@example.com", "votre-mot-de-passe")

	// Envoi de l'email
	return d.DialAndSend(m)
}

// Exporter la fonction handler pour qu'elle soit utilisée par Vercel
func SendEmailHandler(w http.ResponseWriter, r *http.Request) {
	// Vérifie que la méthode est POST
	if r.Method != http.MethodPost {
		http.Error(w, "Méthode non autorisée", http.StatusMethodNotAllowed)
		return
	}

	var emailRequest EmailRequest

	// Décode la requête JSON
	if err := json.NewDecoder(r.Body).Decode(&emailRequest); err != nil {
		http.Error(w, "Erreur de décodage JSON", http.StatusBadRequest)
		return
	}

	// Vérifie que toutes les données sont présentes
	if emailRequest.Name == "" || emailRequest.Email == "" || emailRequest.Subject == "" || emailRequest.Message == "" {
		http.Error(w, "Tous les champs sont obligatoires", http.StatusBadRequest)
		return
	}

	// Envoi de l'email
	err := sendEmail(&emailRequest)
	if err != nil {
		log.Printf("Erreur d'envoi d'email: %s", err)
		http.Error(w, "Erreur lors de l'envoi de l'email", http.StatusInternalServerError)
		return
	}

	// Réponse en cas de succès
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message": "Email envoyé avec succès."}`))
}
