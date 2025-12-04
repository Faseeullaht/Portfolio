import nodemailer from 'nodemailer';
import type { ContactMessage } from '@shared/schema';

const recipientEmail = process.env.CONTACT_EMAIL || 'faseeullah.1998@gmail.com';

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn('SMTP credentials not configured. Email sending will be simulated.');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactEmail(data: ContactMessage): Promise<{ success: boolean; message: string }> {
  const transporter = createTransporter();

  const emailContent = {
    from: `"Portfolio Contact Form" <${process.env.SMTP_USER || 'noreply@portfolio.com'}>`,
    to: recipientEmail,
    replyTo: data.email,
    subject: `New Contact Form Submission${data.name ? ` from ${data.name}` : ''}`,
    text: `
New message from your portfolio contact form:

Name: ${data.name || 'Not provided'}
Email: ${data.email}

Message:
${data.message}
    `.trim(),
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e293b; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${data.name || 'Not provided'}</p>
          <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
        <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #475569;">Message:</h3>
          <p style="white-space: pre-wrap; color: #334155;">${data.message}</p>
        </div>
        <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
          This email was sent from the portfolio contact form.
        </p>
      </div>
    `,
  };

  if (!transporter) {
    console.log('=== SIMULATED EMAIL ===');
    console.log('To:', recipientEmail);
    console.log('From:', data.email);
    console.log('Name:', data.name || 'Not provided');
    console.log('Message:', data.message);
    console.log('======================');
    
    return {
      success: true,
      message: 'Message received! (Email simulation mode - SMTP not configured)',
    };
  }

  try {
    await transporter.sendMail(emailContent);
    console.log(`Contact email sent successfully from ${data.email}`);
    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again later.',
    };
  }
}
