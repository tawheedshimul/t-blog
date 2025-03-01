import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tawheeddev@gmail.com', // Your Gmail address
        pass: 'rpei mkqc tjsp hbaa', // Your Gmail app password
      },
    });
  }

  async sendEmail(name: string, email: string, message: string): Promise<any> {
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 30px; background: linear-gradient(145deg, #f7f7f7, #e1e1e1); border: 1px solid #ddd; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4CAF50; font-size: 1.8em; font-weight: bold; text-align: center; margin-bottom: 20px;">New Contact Form Submission</h2>
        <p style="font-size: 1.1em; margin-bottom: 10px; color: #555;">
          <strong style="color: #4CAF50;">Name:</strong> <span style="color: #333;">${name}</span>
        </p>
        <p style="font-size: 1.1em; margin-bottom: 10px; color: #555;">
          <strong style="color: #4CAF50;">Email:</strong> <span style="color: #333;">${email}</span>
        </p>
        <p style="font-size: 1.1em; margin-bottom: 15px; color: #555;">
          <strong style="color: #4CAF50;">Message:</strong>
        </p>
        <p style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #4CAF50; font-style: italic; font-size: 1.1em; line-height: 1.6; color: #555; border-radius: 8px;">
          ${message}
        </p>
        <p style="margin-top: 20px; font-size: 0.9em; color: #777; text-align: center;">
          This message was sent from the contact form on your website.
        </p>
      </div>
    `;

    const mailOptions = {
      from: email,
      to: 'tawheedshimul@gmail.com', // Your email address
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
      throw new Error(`Email sending failed: ${error.message}`);
    }
  }
}