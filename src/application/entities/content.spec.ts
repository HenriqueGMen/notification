import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Voce tem uma solicitação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 caracteres', () => {
    expect(() => new Content('aaa')).toBeTruthy();
  });

  it('should not be able to create a notification content with more than 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toBeTruthy();
  });
});
