import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/useCases/sendNotificationUseCase';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notification')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return {
      notification,
    };
  }
}
