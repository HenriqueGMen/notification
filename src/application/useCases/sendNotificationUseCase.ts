import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { notificatonRepository } from '../repositories/notificationRepository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: notificatonRepository) {}

  async execute(
    req: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = req;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
