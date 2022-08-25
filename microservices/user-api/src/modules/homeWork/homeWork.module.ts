import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeWorkDocument, HomeWorkSchema } from './document/homeWork.document';
import { HomeWorkService } from './service/homeWork.service';
import { HomeWorkResolver } from './resolver/homeWork.resolver';
import { DialogueModule } from '../dialogue';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HomeWorkDocument.name, schema: HomeWorkSchema },
    ]),
    DialogueModule,
  ],
  providers: [HomeWorkService, HomeWorkResolver],
})
export class HomeWorkModule {}
