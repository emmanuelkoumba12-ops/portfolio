import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendEmail(formData) {
  // Variables mapped to match the EmailJS template fields:
  // {{title}} → subject,  {{name}} / {{nom}} → sender name,
  // {{email}} → reply-to, {{message}} → message body
  const templateParams = {
    title: formData.subject,
    name: formData.name,
    nom: formData.name,
    email: formData.email,
    message: formData.message,
  };

  const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
  return result;
}
