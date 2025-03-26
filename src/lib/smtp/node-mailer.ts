import nodemailer from "nodemailer";
import { Env } from "../env";

const { SMTP_HOST, SMTP_USERNAME, SMTP_PASSWORD, SMTP_PORT, SMTP_SERVICE, SMTP_USE_TLS } = Env;

const transporter = nodemailer.createTransport({
  service: SMTP_SERVICE,
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_USE_TLS,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});

export default transporter;
