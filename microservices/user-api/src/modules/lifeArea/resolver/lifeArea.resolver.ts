import { Args, Query, Resolver } from '@nestjs/graphql';
import { LifeArea } from '../entity';
import { LifeAreaService } from '../service';

@Resolver(LifeArea)
export class LifeAreaResolver {
  constructor(private readonly lifeAreaService: LifeAreaService) {}

  @Query(() => [LifeArea])
  lifeAreas(@Args('languageCode') languageCode: string) {
    return this.lifeAreaService.getAll(languageCode);
  }
}
