import { Args, Query, Resolver } from '@nestjs/graphql';
import { Emotion } from '../entity';
import { EmotionService } from '../service';

@Resolver(Emotion)
export class EmotionResolver {
  constructor(private readonly emotionService: EmotionService) {}

  @Query(() => [Emotion])
  emotions(@Args('languageCode') languageCode: string) {
    return this.emotionService.getAll(languageCode);
  }
}
