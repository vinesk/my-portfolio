import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message, to } = await request.json();

  // Vérifiez que toutes les variables requises sont présentes
  if (!name || !email || !message || !to) {
    return NextResponse.json(
      { message: "Tous les champs sont requis" },
      { status: 400 }
    );
  }

  // Vérifiez que les variables d'environnement sont définies
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error(
      "Variables d'environnement EMAIL_USER ou EMAIL_PASS non définies"
    );
    return NextResponse.json(
      { message: "Erreur de configuration du serveur" },
      { status: 500 }
    );
  }

  // Configurez votre transporteur nodemailer ici
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("Message envoyé: %s", info.messageId);
    return NextResponse.json({
      message: "Email envoyé avec succès",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Erreur détaillée lors de l'envoi de l'email:", error);
    return NextResponse.json(
      {
        message: "Erreur lors de l'envoi de l'email",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
