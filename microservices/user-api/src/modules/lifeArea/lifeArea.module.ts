import { Module } from '@nestjs/common';
import { LifeAreaResolver } from './resolver';
import { LifeAreaService } from './service';

@Module({
  providers: [LifeAreaResolver, LifeAreaService],
  exports: [LifeAreaService],
})
export class LifeAreaModule {}
