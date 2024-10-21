import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message, to } = req.body;

    // Vérifiez que toutes les variables requises sont présentes
    if (!name || !email || !message || !to) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    // Configurez votre transporteur nodemailer ici
    let transporter = nodemailer.createTransport({
      // Configuration pour Gmail SMTP
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // Votre adresse Gmail
        pass: process.env.EMAIL_PASS, // Votre mot de passe d'application Gmail
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: to,
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Nom:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      res.status(500).json({
        message: "Erreur lors de l'envoi de l'email",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
