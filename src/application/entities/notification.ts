import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'crypto';

export interface INotification {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private notification: INotification;

  constructor(notification: Replace<INotification, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.notification = {
      ...notification,
      createdAt: notification.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.notification.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.notification.recipientId;
  }

  public set content(content: Content) {
    this.notification.content = content;
  }

  public get content(): Content {
    return this.notification.content;
  }

  public set category(category: string) {
    this.notification.category = category;
  }

  public get category(): string {
    return this.notification.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.notification.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.notification.readAt;
  }

  public get createdAt(): Date {
    return this.notification.createdAt;
  }
}
