import { Notification } from '../entities/notification';

export abstract class notificatonRepository {
  abstract create(notification: Notification): Promise<void>;
}
