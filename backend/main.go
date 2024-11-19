package handler

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

// EmailRequest représente les données reçues du formulaire de contact.
type EmailRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

// handler est la fonction qui gère l'envoi de l'email.
func handler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Méthode non autorisée", http.StatusMethodNotAllowed)
		return
	}

	// Décoder les données envoyées depuis le formulaire
	var emailRequest EmailRequest
	if err := json.NewDecoder(r.Body).Decode(&emailRequest); err != nil {
		http.Error(w, "Erreur de décodage JSON", http.StatusBadRequest)
		return
	}

	// Préparer le payload pour l'API Mailjet
	payload := map[string]interface{}{
		"Messages": []map[string]interface{}{
			{
				"From": map[string]string{
					"Email": os.Getenv("MAILJET_SENDER_EMAIL"),
					"Name":  os.Getenv("MAILJET_SENDER_NAME"),
				},
				"To": []map[string]string{
					{
						"Email": "n95jsryan@gmail.com",
						"Name":  "Ryan Pina-silasse",
					},
				},
				"Subject":  emailRequest.Subject,
				"TextPart": emailRequest.Message,
				"HTMLPart": fmt.Sprintf(
					"<h3>Nouveau message de %s</h3><p>Email: %s</p><p>Message: %s</p>",
					emailRequest.Name, emailRequest.Email, emailRequest.Message,
				),
			},
		},
	}

	// Convertir le payload en JSON
	payloadBytes, err := json.Marshal(payload)
	if err != nil {
		http.Error(w, "Erreur lors de la conversion du payload", http.StatusInternalServerError)
		return
	}

	// URL de l'API Mailjet
	url := "https://api.mailjet.com/v3.1/send"

	// Préparer la requête HTTP
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(payloadBytes))
	if err != nil {
		http.Error(w, "Erreur lors de la création de la requête HTTP", http.StatusInternalServerError)
		return
	}

	// Ajouter les en-têtes et l'authentification
	req.Header.Set("Content-Type", "application/json")
	req.SetBasicAuth(os.Getenv("MAILJET_API_KEY"), os.Getenv("MAILJET_API_SECRET"))

	// Exécuter la requête
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		http.Error(w, "Erreur lors de l'envoi de l'email", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	// Vérifier le résultat
	if resp.StatusCode == http.StatusOK || resp.StatusCode == http.StatusCreated {
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, `{"message": "Email envoyé avec succès !"}`)
	} else {
		log.Printf("Échec de l'envoi. Code HTTP : %d", resp.StatusCode)
		http.Error(w, "Erreur lors de l'envoi de l'email", http.StatusInternalServerError)
	}
}

// Exporte la fonction handler comme fonction de Vercel
func SendEmailHandler(w http.ResponseWriter, r *http.Request) {
	handler(w, r)
}
