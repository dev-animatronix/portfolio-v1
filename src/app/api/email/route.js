import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc: email, // Décommente si tu veux envoyer une copie à l'expéditeur
    subject: `Message de ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email envoyé, une copie vous sera retournée');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email envoyé' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
