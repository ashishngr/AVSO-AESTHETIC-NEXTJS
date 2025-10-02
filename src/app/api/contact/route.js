import { Resend } from 'resend';

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:
      `secret=${encodeURIComponent(secret)}` +
      `&response=${encodeURIComponent(token)}`,
  });
  return resp.json();
}

function toText(fields) {
  return [
    'New contact form submission',
    '--------------------------------',
    `Name: ${fields.name || ''}`,
    `Email: ${fields.email || ''}`,
    `Phone: ${fields.phone || ''}`,
    `Service: ${fields.service || ''}`,
    '',
    'Message:',
    fields.message || '',
  ].join('\n');
}

export async function POST(req) {
  try {
    const { token, ...fields } = await req.json();

    // 1) CAPTCHA
    const result = await verifyRecaptcha(token);
    if (!result.success) {
      return new Response(JSON.stringify({ ok: false, reason: 'captcha' }), { status: 400 });
    }

    // 2) Email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.EMAIL_FROM;         // e.g., onboarding@resend.dev
    const to = process.env.EMAIL_TO;             // avsoaesthetic@gmail.com

    await resend.emails.send({
      from,
      to,
      subject: `New contact request from ${fields.name || 'Website'}`,
      reply_to: fields.email || undefined,
      text: toText(fields),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
