// Resend
import { Resend } from "resend";
import sendEmail from "./mail/send-website.mail.";

// Config
import { ENV } from "../lib/config/env";

const resend = new Resend(ENV.RESEND_API_KEY);

// TODO: implement rate limiter
export const server = {
  send: sendEmail,
};
