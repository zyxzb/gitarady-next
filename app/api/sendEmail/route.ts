/* eslint @typescript-eslint/no-var-requires: "off" */

import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, email, message } = data;
    console.log(data);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_GMAIL_EMAIL_ADDRESS,
        pass: process.env.NEXT_GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOption = {
      from: email,
      to: process.env.NEXT_GMAIL_EMAIL_ADDRESS,
      replyTo: email,
      subject: 'Nowa wiadomość ze strony internetowej!',
      html: `
      <h3>Masz nową wiadomość ze strony internetowej!</h3>
      <br/>
      <p>Imię: ${firstName}</p>
      <p>Adres e-mail nadawcy: ${email}</p> 
      <p>Wiadomość: ${message}</p>
      `,
    };

    // await for response
    await new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transporter.sendMail(mailOption, function (err: any, info: any) {
        if (err) {
          console.error('Error mailOption:', err);
          reject(err);
        } else {
          console.log('Info mailOption:', info);
          resolve(info);
        }
      });
    });

    // if ok response
    return NextResponse.json({ message: 'Email wyslany' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
