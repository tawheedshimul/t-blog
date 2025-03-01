import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('api/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body('name') name: string, @Body('email') email: string, @Body('message') message: string) {
    return this.emailService.sendEmail(name, email, message);
  }
}