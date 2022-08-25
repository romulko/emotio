import { HttpModule } from '@nestjs/axios';
import { AbcResolver } from './resolver';
import { AbcService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import { Abc, AbcSchema } from './enity';
import { MessagesModule } from '../messages';
import { EmotionModule } from '../emotion';
import { LifeAreaModule } from '../lifeArea';
import { UserModule } from '../user';
import { DialogueModule } from '../dialogue';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Abc.name, schema: AbcSchema }]),
    HttpModule,
    MessagesModule,
    EmotionModule,
    LifeAreaModule,
    UserModule,
    DialogueModule,
  ],
  providers: [AbcResolver, AbcService],
})
export class AbcModule {}
