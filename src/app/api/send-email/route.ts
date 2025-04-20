import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, locale } = await request.json();

    // Vérification de l'URL du backend
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!backendUrl) {
      throw new Error('Backend URL not configured');
    }

    // Appel à l'API backend Go
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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send email');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : 'Error sending email' },
      { status: 500 }
    );
  }
} 