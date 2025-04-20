import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, locale } = await request.json();
    console.log('Données reçues:', { name, email, subject, message, locale });

    // Vérification de l'URL du backend
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log('URL du backend:', backendUrl);
    
    if (!backendUrl) {
      console.error('Backend URL non configurée');
      throw new Error('Backend URL not configured');
    }

    // Appel à l'API backend Go
    console.log('Envoi de la requête à:', `${backendUrl}/api/send-email`);
    const response = await fetch(`${backendUrl}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message
      }),
    });

    console.log('Statut de la réponse:', response.status);
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erreur du backend:', errorData);
      throw new Error(errorData.message || 'Failed to send email');
    }

    const data = await response.json();
    console.log('Réponse du backend:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error sending email' },
      { status: 500 }
    );
  }
} 