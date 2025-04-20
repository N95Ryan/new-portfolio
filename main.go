package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

type EmailRequest struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Subject string `json:"subject"`
	Message string `json:"message"`
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Erreur de chargement du fichier .env")
	}

	// CORS configuration
	c := cors.New(cors.Options{
		AllowedOrigins: []string{
			"https://www.ryan-pina.dev",
			"http://localhost:3000",
		},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Content-Type", "Authorization"},
		Debug:          true,
	})

	http.HandleFunc("/api/send-email", handler)

	// Applique le middleware CORS à toutes les requêtes
	handler := c.Handler(http.DefaultServeMux)

	log.Println("Serveur démarré sur le port 8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}

func handler(w http.ResponseWriter, r *http.Request) {
	log.Printf("Requête reçue de %s - Méthode: %s - Path: %s", r.RemoteAddr, r.Method, r.URL.Path)
	log.Printf("Headers: %v", r.Header)

	if r.Method != http.MethodPost {
		log.Printf("Méthode non autorisée: %s", r.Method)
		http.Error(w, "Méthode non autorisée", http.StatusMethodNotAllowed)
		return
	}

	// Décoder les données envoyées depuis le formulaire
	var emailRequest EmailRequest
	if err := json.NewDecoder(r.Body).Decode(&emailRequest); err != nil {
		log.Printf("Erreur de décodage JSON: %v", err)
		http.Error(w, "Erreur de décodage JSON", http.StatusBadRequest)
		return
	}
	log.Printf("Données reçues: %+v", emailRequest)

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
		log.Printf("Erreur de conversion du payload: %v", err)
		http.Error(w, "Erreur lors de la conversion du payload", http.StatusInternalServerError)
		return
	}

	// URL de l'API Mailjet
	url := "https://api.mailjet.com/v3.1/send"

	// Préparer la requête HTTP
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(payloadBytes))
	if err != nil {
		log.Printf("Erreur de création de la requête HTTP: %v", err)
		http.Error(w, "Erreur lors de la création de la requête HTTP", http.StatusInternalServerError)
		return
	}

	// Ajouter les en-têtes et l'authentification
	req.Header.Set("Content-Type", "application/json")
	req.SetBasicAuth(os.Getenv("MAILJET_API_KEY"), os.Getenv("MAILJET_API_SECRET"))

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Printf("Erreur d'envoi de l'email: %v", err)
		http.Error(w, "Erreur lors de l'envoi de l'email", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusOK || resp.StatusCode == http.StatusCreated {
		log.Printf("Email envoyé avec succès")
		w.WriteHeader(http.StatusOK)
		fmt.Fprint(w, `{"message": "Email envoyé avec succès !"}`)
	} else {
		log.Printf("Échec de l'envoi. Code HTTP : %d", resp.StatusCode)
		http.Error(w, "Erreur lors de l'envoi de l'email", http.StatusInternalServerError)
	}
}
