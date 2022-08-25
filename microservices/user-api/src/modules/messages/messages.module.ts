import { Module } from '@nestjs/common';
import { MessageService } from './service';

@Module({
  providers: [MessageService],
  exports: [MessageService],
})
export class MessagesModule {}
