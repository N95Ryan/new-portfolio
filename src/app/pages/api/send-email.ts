import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Configurez le transporteur SMTP avec des variables d'environnement
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true pour le port 465, false pour les autres
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurez les options de l'email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: subject,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email envoyé avec succès' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
