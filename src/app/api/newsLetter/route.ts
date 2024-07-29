import { supabase } from "@/lib/supa";
import { EmailTemplate } from "./emailTempalte";
import { htmlstr } from "./email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  const userEmail = request.headers.get("email");
  try {
    if (userEmail) {
      const { data, error } = await resend.emails.send({
        from: "Equillect <no-reply@equillect.com>",
        to: [userEmail],
        text: "Welcome to equillect newsLetter",
        subject: "Welcome to equillect newsletter",
        reply_to: "reach@equillect.com",
        html: htmlstr,
        // react: EmailTemplate(),
      });

      if (error) {
        return Response.json({ error }, { status: 500 });
      }

      const newsLetter = await supabase.from("newsletter").insert([
        {
          email: userEmail,
        },
      ]);

      return Response.json(data);
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
