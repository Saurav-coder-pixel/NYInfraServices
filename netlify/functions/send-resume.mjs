const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = 'sura767848@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  // Check API key is configured
  if (!RESEND_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email service is not configured. Please set the RESEND_API_KEY environment variable in Netlify.' }),
    };
  }

  try {
    const payload = JSON.parse(event.body);
    const { fullName, email, phone, role, message, fileName, fileContent } = payload;

    // Server-side validation
    if (!fullName || !email || !phone || !role) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields: fullName, email, phone, role.' }) };
    }
    if (!fileName || !fileContent) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Resume file is required.' }) };
    }

    // Build email via Resend API
    const resendPayload = {
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email.trim(),
      subject: `Resume Submission – ${role.trim()} – ${fullName.trim()}`,
      html: `
        <h2>New Resume Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${fullName.trim()}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email.trim()}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone.trim()}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Role Applied For</td><td style="padding:8px;border:1px solid #ddd;">${role.trim()}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Cover Letter</td><td style="padding:8px;border:1px solid #ddd;">${(message || 'No cover letter provided.').trim()}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666;">Resume attached: <strong>${fileName}</strong></p>
      `,
      attachments: [
        {
          filename: fileName,
          content: fileContent,
        },
      ],
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(resendPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: data.message || 'Failed to send email. Please try again later.' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: data.id }),
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An internal error occurred. Please try again later.' }),
    };
  }
}
