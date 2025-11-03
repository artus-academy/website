import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, type } = body;

  try {
    const fieldData = Object.keys(body)
      .filter((f) => f !== "name" && f !== "email")
      .map((f) => `<p><b>${f}:</b> ${body[f]}</p>`)
      .join("");
    await resend.emails.send({
      from: "ArtUs Academy <no-reply@artusacademy.com>",
      to: "info@artusacademy.com",
      replyTo: email,
      subject: `${type} form submission from ${name}`,
      html: `<p><b>Type:</b> ${type}</p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p>${fieldData}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
