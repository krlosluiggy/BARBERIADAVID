import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Barbería Ricardo David" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;border:1px solid #eee;border-radius:12px;overflow:hidden">
          <div style="background:#1A1A1A;padding:24px;text-align:center">
            <h2 style="color:#D4AF37;margin:0;font-size:20px">Barbería Ricardo David</h2>
            <p style="color:#aaa;margin:4px 0 0;font-size:13px">Nuevo mensaje de contacto</p>
          </div>
          <div style="padding:24px;background:#fff">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#888;width:100px">Nombre</td><td style="padding:8px 0;font-weight:bold">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888">Email</td><td style="padding:8px 0">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#888">Teléfono</td><td style="padding:8px 0">${phone}</td></tr>
              <tr><td style="padding:8px 0;color:#888;vertical-align:top">Mensaje</td><td style="padding:8px 0">${message}</td></tr>
            </table>
          </div>
          <div style="background:#f9f9f9;padding:12px 24px;text-align:center;font-size:12px;color:#aaa">
            Barbería Ricardo David · Guanare, Portuguesa, Venezuela
          </div>
        </div>`,
    });

    res.status(200).json({ success: true, message: "¡Mensaje enviado! Te contactaremos pronto." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error al enviar el mensaje. Intenta de nuevo." });
  }
}
