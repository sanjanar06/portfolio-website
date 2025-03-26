"use server";

import { Env } from "../env";
import transporter from "./node-mailer";

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  await transporter.sendMail({
    from: email,
    to: sendTo || Env.SMTP_USERNAME,
    subject: subject,
    text: text,
    html: html ? html : "",
  });
}
