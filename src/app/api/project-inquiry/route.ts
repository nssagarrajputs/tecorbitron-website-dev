import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, company, email, phone, description } = body;

        if (!name || !email || !phone || !description) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 },
            );
        }

        await resend.emails.send({
            from: "Tecorbitron <noreply@tecorbitron.com>",
            to: process.env.CONTACT_EMAIL || "info@tecorbitron.com",
            replyTo: email,
            subject: `TSPL Project Inquiry - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0C3146;">
                    <h2 style="margin-bottom: 16px;">New Project Inquiry</h2>

                    <p><strong>Full Name:</strong> ${name}</p>
                    <p><strong>Company / Brand Name:</strong> ${company || "Not provided"}</p>
                    <p><strong>Work Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>

                    <hr style="margin: 24px 0; border: none; border-top: 1px solid #DDE6ED;" />

                    <p><strong>Project Description:</strong></p>
                    <p style="white-space: pre-line;">${description}</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch {
        return NextResponse.json(
            { error: "Failed to send inquiry" },
            { status: 500 },
        );
    }
}
