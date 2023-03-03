import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../application/entities/notification';
import { notificatonRepository } from '../../../../application/repositories/notificationRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements notificatonRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications_db.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
