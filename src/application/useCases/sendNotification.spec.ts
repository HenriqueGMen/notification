import { InMemoryNotificationsRepository } from '../../../test/repositories/inMemoryNotificationsRepository';
import { SendNotification } from './sendNotificationUseCase';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'recipient-test',
      category: 'category-test',
      content: 'content-test',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
