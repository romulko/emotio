import { Module } from '@nestjs/common';
import { EmotionResolver } from './resolver';
import { EmotionService } from './service';

@Module({
  providers: [EmotionResolver, EmotionService],
  exports: [EmotionService],
})
export class EmotionModule {}
