import { Module } from '@nestjs/common';
import { notificatonRepository } from 'src/application/repositories/notificationRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prismaNotificationsRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: notificatonRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [notificatonRepository],
})
export class DatabaseModule {}
