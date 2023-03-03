import { Content } from './content';
import { Notification } from './notification';

describe('Notifications test', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova mensagem'),
      category: 'social',
      recipientId: 'recipientId-test',
    });

    expect(notification).toBeTruthy();
  });
});
