import { z } from "zod";

export const EnvSchema = z.object({
  SMTP_USERNAME: z.string().min(1, { message: "SMTP username is required" }),
  SMTP_PASSWORD: z.string().min(1, { message: "SMTP password is required" }),
  SMTP_FROM_EMAIL: z.string().email({ message: "Invalid sender email address" }),
  SMTP_HOST: z.string().min(1, { message: "SMTP host is required" }),
  SMTP_PORT: z.coerce.number().min(1).max(65535, { message: "Invalid SMTP port number" }),
  SMTP_USE_TLS: z.coerce.boolean(),
  SMTP_SERVICE: z.string().min(1, { message: "SMTP_SERVICE username is required" }),
});

export const Env = EnvSchema.parse(process.env);
