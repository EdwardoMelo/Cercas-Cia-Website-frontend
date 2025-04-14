import api from "./api";


export async function sendEmail({
  name,
  email,
  phone,
  subject,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    const response = await api.post("/email", {
      name,
      email,
      phone,
      subject,
      message,
    });
    return response.status;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Falha ao enviar contato, tente novamente, mais tarde :c");
  }
}
