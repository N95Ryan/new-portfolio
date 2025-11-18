import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, locale } = await request.json();
    console.log('Données reçues:', { name, email, subject, message, locale });

    // Backend URL verification
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log('URL du backend:', backendUrl);
    
    if (!backendUrl) {
      console.error('Backend URL non configurée');
      throw new Error('Backend URL not configured');
    }

    // Backend availability check
    try {
      const healthCheck = await fetch(`${backendUrl}/health`);
      console.log('État du backend:', healthCheck.status);
      if (!healthCheck.ok) {
        throw new Error(`Backend non disponible (${healthCheck.status})`);
      }
    } catch (healthError) {
      console.error('Erreur de connexion au backend:', healthError);
      throw new Error('Backend non accessible');
    }

    // Call to the Go backend API
    const apiUrl = `${backendUrl}/api/send-email`;
    
    console.log('Tentative de connexion à:', apiUrl);
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message
        }),
      });

      console.log('Statut de la réponse:', response.status);
      console.log('Headers de la réponse:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Réponse d\'erreur brute:', errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch (e) {
          errorData = { message: errorText };
        }
        console.error('Erreur du backend:', errorData);
        throw new Error(errorData.message || `Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      console.log('Réponse du backend:', data);
      return NextResponse.json(data);
    } catch (fetchError: unknown) {
      console.error('Erreur lors de la requête fetch:', fetchError);
      const errorMessage = fetchError instanceof Error ? fetchError.message : 'Erreur inconnue';
      throw new Error(`Erreur de connexion au backend: ${errorMessage}`);
    }
  } catch (error) {
    console.error('Erreur détaillée:', error);
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : 'Error sending email',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 