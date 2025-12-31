
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Default Resend testing sender
            to: process.env.CONTACT_EMAIL || 'rufus.k.gladness@gmail.com', // Fallback to email found in page
            subject: `New Contact Form Message from ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
