package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"portfolio/backend/config"
)

// EmailRequest représente les données reçues du formulaire de contact.
type EmailRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

// Middleware CORS
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Permettre les requêtes venant de localhost:3000
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Répondre aux requêtes préalables (OPTIONS)
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		// Appeler le handler suivant
		next.ServeHTTP(w, r)
	})
}

func main() {
	// Charger la configuration Mailjet
	mailjetConfig, err := config.LoadConfig()
	if err != nil {
		log.Fatal("Erreur lors du chargement de la configuration Mailjet :", err)
	}

	// Créez un serveur HTTP pour écouter les requêtes POST du formulaire
	http.HandleFunc("/api/send-email", func(w http.ResponseWriter, r *http.Request) {
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
						"Email": mailjetConfig.SenderEmail, // Votre email d'expédition
						"Name":  mailjetConfig.SenderName,
					},
					"To": []map[string]string{
						{
							"Email": "n95jsryan@gmail.com", // Votre adresse de réception
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
		req.SetBasicAuth(mailjetConfig.APIKey, mailjetConfig.APISecret)

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
	})

	// Lancer le serveur sur le port 8080 avec le middleware CORS
	fmt.Println("Serveur en cours d'exécution sur : http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", corsMiddleware(http.DefaultServeMux)))
}
