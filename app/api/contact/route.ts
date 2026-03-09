import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // TODO: Connect to your email service here
        // Option 1: EmailJS (client-side, no need for this route)
        // Option 2: Nodemailer — add your SMTP config
        // Option 3: Resend, SendGrid, or other email API
        //
        // Example with Nodemailer:
        // const transporter = nodemailer.createTransport({...})
        // await transporter.sendMail({
        //   from: email,
        //   to: 'your@email.com',
        //   subject: `Portfolio: ${subject}`,
        //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`
        // })

        console.log("Contact form submission:", { name, email, subject, message });

        return NextResponse.json(
            { message: "Message sent successfully!" },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
