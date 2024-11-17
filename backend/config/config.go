package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	APIKey      string
	APISecret   string
	SenderEmail string
	SenderName  string
}

// LoadConfig charge la configuration depuis le fichier .env
func LoadConfig() (Config, error) {
	// Charger le fichier .env
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Erreur lors du chargement du fichier .env :", err)
	}

	// Lire les variables d'environnement
	config := Config{
		APIKey:      os.Getenv("MAILJET_API_KEY"),
		APISecret:   os.Getenv("MAILJET_API_SECRET"),
		SenderEmail: os.Getenv("MAILJET_SENDER_EMAIL"),
		SenderName:  os.Getenv("MAILJET_SENDER_NAME"),
	}

	return config, nil
}
