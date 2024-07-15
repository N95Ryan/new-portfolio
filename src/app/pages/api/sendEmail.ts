import { NextApiRequest, NextApiResponse } from 'next';
import { Client, SendEmailV3_1, LibraryResponse } from 'node-mailjet';

// Définir le service Mailjet
class MailjetService {
  private name: string;
  private email: string;
  private subject: string;
  private message: string;
  private mailjet: Client;

  constructor(name: string, email: string, subject: string, message: string) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.message = message;
    this.mailjet = new Client({
      apiKey: process.env.NEXT_PUBLIC_MAILJET_API_KEY!,
      apiSecret: process.env.NEXT_PUBLIC_MAILJET_API_PRIVATE!,
    });
  }

  public async sendMail(): Promise<void> {
    const data: SendEmailV3_1.Body = {
      Messages: [
        {
          From: {
            Email: this.email,
            Name: this.name,
          },
          To: [
            {
              Email: 'ryanpinas77@gmail.com',
              Name: 'Ryan PINA-SILASSE',
            },
          ],
          TemplateErrorReporting: {
            Email: 'reporter@test.com',
            Name: 'Reporter',
          },
          Subject: this.subject,
          HTMLPart: '<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!',
          TextPart: this.message,
        },
      ],
    };

    const result: LibraryResponse<SendEmailV3_1.Response> = await this.mailjet
      .post('send', { version: 'v3.1' })
      .request(data);

    const { Status } = result.body.Messages[0];
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const mailjetService = new MailjetService(name, email, subject, message);
      await mailjetService.sendMail();
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
