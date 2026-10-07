export const CONTACT_EMAIL = 'soporte@generadordenombres.net';
export const MAX_MAILTO_URL_LENGTH = 1800;

export interface ContactDraft {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PreparedContact {
  subject: string;
  body: string;
  plainText: string;
  mailtoUrl: string | null;
}

/**
 * No backend exists for the static contact page: this only prepares a draft.
 * Long mailto URLs are unreliable across browsers/mail clients; supply an
 * offline .txt / clipboard fallback instead of silently truncating the body.
 */
export function prepareContactDraft(draft: ContactDraft): PreparedContact {
  const name = draft.name.trim().replace(/[\r\n\t]+/g, ' ');
  const email = draft.email.trim().replace(/[\r\n\t]+/g, ' ');
  const subjectValue = draft.subject.trim().replace(/[\r\n\t]+/g, ' ');
  const message = draft.message.replace(/\r\n?/g, '\n').trim();
  const subject = `[GeneradorDeNombres.net] ${subjectValue} - ${name}`;
  const body = `Nombre: ${name}\nCorreo: ${email}\nAsunto: ${subjectValue}\n\nMensaje:\n${message}`;
  const plainText = `Para: ${CONTACT_EMAIL}\nAsunto: ${subject}\n\n${body}`;
  const candidate = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return {
    subject, body, plainText,
    mailtoUrl: candidate.length <= MAX_MAILTO_URL_LENGTH ? candidate : null,
  };
}
