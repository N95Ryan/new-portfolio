import * as mailjet from 'node-mailjet';
import { NextApiRequest, NextApiResponse } from 'next';
import 'dotenv/config';

const mailjetClient = mailjet.connect(
  process.env.MAILJET_API_KEY as string,
  process.env.MAILJET_API_SECRET as string,
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      const request = mailjetClient.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: "your_email@example.com", // Remplacez par votre adresse e-mail
              Name: "Your Name", // Remplacez par votre nom
            },
            To: [
              {
                Email: "ryanpinas77@gmail.com",
                Name: "Ryan PINA-SILASSSE",
              },
            ],
            Subject: subject,
            TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            HTMLPart: `<h3>Name: ${name}</h3><p>Email: ${email}</p><p>Message: ${message}</p>`,
          },
        ],
      });

      const response = await request;
      if (response.body) {
        res.status(200).json({ message: 'Email sent successfully' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  }
}