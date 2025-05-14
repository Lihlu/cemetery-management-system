export const accountCreatedTemplate = (name: string): string => `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #4B8B3B;">🌿 Welcome to Memoria</h2>
      <p>Dear ${name},</p>
      <p>We're pleased to let you know that your account with <strong>Memoria</strong> has been successfully created.</p>
      <p>Memoria is dedicated to providing respectful and efficient cemetery management services, helping families and administrators with memorial planning, plot reservations, and record management.</p>
      <p>You can now log in to your account to begin using our services, manage cemetery information, or connect with our support team if you need assistance.</p>
      <br />
      <p>If you have any questions or need guidance, feel free to reach out to our support team at any time.</p>
      <br />
      <p>Warm regards,<br/>The Memoria Team</p>
    </div>
  `;
