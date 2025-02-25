// Dependencies
import { Resend } from "resend";
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { LRUCache } from "lru-cache";

// Config
import { ENV } from "../../lib/config/env";

const resend = new Resend(ENV.RESEND_API_KEY);
const rt = new LRUCache<string, any>({
  max: 5000,
  ttl: 86400000,
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
    if (!email || !name || !message || !subject) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: "Please fill all the fields",
      });
    }

    // const ip = ctx.request.headers.get("host") || "127.0.0.1";
    // if (rt.has(ip)) {
    //   throw new ActionError({
    //     code: "TOO_MANY_REQUESTS",
    //     message: "Too many requests",
    //   });
    // }

    const { data, error } = await resend.emails.send({
      from: `${name} <website@danielyepes.com>`,
      to: ["yepes1201@gmail.com"],
      subject: subject,
      html: `<section><p>${message}</p><br/><strong>${name}<br/>${email}</strong></section>`,
    });

    // rt.set(ip, true);

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
