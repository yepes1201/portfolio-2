// Dependencies
import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";

// Resend
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

// TODO: implement rate limiter
export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string(),
      subject: z.string(),
      message: z.string(),
    }),
    handler: async ({ email, name, message, subject }) => {
      const { data, error } = await resend.emails.send({
        from: `${name} <website@danielyepes.com>`,
        to: ["yepes1201@gmail.com"],
        subject: subject,
        html: `<section><p>${message}</p><br/><strong>${name}<br/>${email}</strong></section>`,
      });

      if (error) {
        console.log(error);
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};
