import { Notification } from '../../src/application/entities/notification';
import { notificatonRepository } from '../../src/application/repositories/notificationRepository';

export class InMemoryNotificationsRepository implements notificatonRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
