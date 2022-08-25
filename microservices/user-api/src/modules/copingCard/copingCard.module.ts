import { Module } from '@nestjs/common';
import { CopingCardResolver } from './resolver';
import { CopingCardService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import { CopingCard, CopingCardSchema } from './entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CopingCard.name, schema: CopingCardSchema },
    ]),
  ],
  providers: [CopingCardResolver, CopingCardService],
  exports: [CopingCardService],
})
export class CopingCardModule {}
