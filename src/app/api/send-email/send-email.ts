import type { NextApiRequest, NextApiResponse } from "next";

// Importez `exec.Command` pour exécuter le binaire Go
import { spawn } from "child_process";

// Définir le type de réponse
type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    // Récupérer les données envoyées depuis le formulaire
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Tous les champs sont obligatoires." });
    }

    // Construire les arguments pour passer les données au programme Go
    const args = [name, email, subject, message];

    // Exécuter le programme Go
    const goProcess = spawn("./main", args, { cwd: process.cwd() });

    // Collecter la sortie du programme Go
    goProcess.stdout.on("data", (data) => {
      console.log(`STDOUT: ${data}`);
    });

    // Collecter les erreurs éventuelles du programme Go
    goProcess.stderr.on("data", (data) => {
      console.error(`STDERR: ${data}`);
    });

    // Réagir à la fin du processus Go
    goProcess.on("close", (code) => {
      if (code === 0) {
        res.status(200).json({ message: "Email envoyé avec succès." });
      } else {
        res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Méthode non autorisée." });
  }
}
