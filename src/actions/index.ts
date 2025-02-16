// Resend
import { Resend } from "resend";
import sendEmail from "./mail/send-website.mail.";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// TODO: implement rate limiter
export const server = {
  send: sendEmail,
};
