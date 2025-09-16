import { Resend } from "resend";
import { server } from "../utils/constant.js";

const resend = new Resend(server.RESEND_API);

export const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const response = await resend.emails.send({
      from: "B-Mart <onboarding@resend.dev>",
      to: sendTo,
      subject,
      html,
    });

    if (response.error) {
      console.error("Resend API Error:", response.error);
      throw new Error(response.error.message);
    }

    console.log("Email sent:", response.data);
    return response.data;
  } catch (error) {
    console.error("SendEmail Error:", error);
    throw error;
  }
};
