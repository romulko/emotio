import { Module } from '@nestjs/common';
import { DialogueService } from './service';
import { DialogueResolver } from './resolver';
import { TransformerService } from './service/transformer.service';
import { EmotionModule } from '../emotion';
import { LifeAreaModule } from '../lifeArea';
import { MongooseModule } from '@nestjs/mongoose';
import { DialogueDocument, DialogueSchema } from './entity/dialogue.document';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DialogueDocument.name, schema: DialogueSchema },
    ]),
    EmotionModule,
    LifeAreaModule,
  ],
  providers: [DialogueService, TransformerService, DialogueResolver],
  exports: [DialogueService],
})
export class DialogueModule {}
