import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, reason, message, phone } = await request.json();

  try {
    await resend.emails.send({
      from: "SITCOLS <noreply@sitcols.kevinbolanos.com>",
      to: "kevinfelipebolanosorozco@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `<h1>Nuevo mensaje de ${name}</h1>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Teléfono:</strong> ${phone}</p>
             <p><strong>Razón de contacto:</strong> ${reason}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });

    return Response.json({
      success: true,
      message: "Correo enviado correctamente ✅",
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, message: "Error al enviar correo ❌" },
      { status: 500 }
    );
  }
}
