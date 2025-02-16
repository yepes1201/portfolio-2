// Dependencies
import { Resend } from "resend";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { LRUCache } from "lru-cache";

// Config
const resend = new Resend(import.meta.env.RESEND_API_KEY);
const rt = new LRUCache<string, any>({
  max: 5000,
  ttl: 24 * 60 * 60 * 1000, // A day in miliseconds
});

const sendEmail = defineAction({
  accept: "form",
  input: z.object({
    name: z.string(),
    email: z.string(),
    subject: z.string(),
    message: z.string(),
  }),
  handler: async ({ email, name, message, subject }, ctx) => {
    const ip = ctx.request.headers.get("x-forwarded-for") || "127.0.0.1"; // TODO: set correct key
    if (rt.has(ip)) {
      throw new ActionError({
        code: "TOO_MANY_REQUESTS",
        message: "Too many requests",
      });
    }

    const { data, error } = await resend.emails.send({
      from: `${name} <website@danielyepes.com>`,
      to: ["yepes1201@gmail.com"],
      subject: subject,
      html: `<section><p>${message}</p><br/><strong>${name}<br/>${email}</strong></section>`,
    });

    rt.set(ip, true);

    if (error) {
      console.log(error);
      throw new ActionError({
        code: "BAD_REQUEST",
        message: error.message,
      });
    }

    return data;
  },
});

export default sendEmail;
