
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            "full-name": fullName,
            email,
            "idea-description": ideaDescription,
            "background-role": backgroundRole,
            "stage-of-idea": stageOfIdea,
            timeline,
            "technical-needs": technicalNeeds,
            "equity-compensation": equityCompensation
        } = body;

        // Basic validation
        if (!fullName || !email || !ideaDescription) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const formattedTechnicalNeeds = Array.isArray(technicalNeeds)
            ? technicalNeeds.join(', ')
            : technicalNeeds;

        const data = await resend.emails.send({
            from: 'Portfolio Cofounder App <onboarding@resend.dev>', // Default Resend testing sender
            to: process.env.CONTACT_EMAIL || 'rufus.k.gladness@gmail.com',
            subject: `New Cofounder Application from ${fullName}`,
            replyTo: email,
            text: `
New Cofounder Application Details:

Name: ${fullName}
Email: ${email}
Role/Background: ${backgroundRole}

Project/Idea:
${ideaDescription}

Stage: ${stageOfIdea}
Timeline: ${timeline}

Technical Needs:
${formattedTechnicalNeeds}

Equity/Compensation:
${equityCompensation}
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
