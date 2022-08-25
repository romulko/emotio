import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CopingCard, CopingCardTechnic, TechnicDoing } from '../entity';
import { CopingCardService } from '../service';
import {
  CreateCopingCardInput,
  CopingCardTechnicCreateInput,
  DeleteCopingCardInput,
  CopingCardTechnicDeleteInput,
  UpdateCopingCardInput,
  CopingCardTechnicUpdateInput,
  TechnicDoingCreateInput,
  TechnicDoingFinishInput,
  TechnicDoingFindOneInput,
  TechnicDoingDeleteInput,
  TechnicDoingStartEmotionIntensityUpdateInput,
  TechnicDoingEndEmotionIntensityUpdateInput,
} from '../entity/copingCard.input';
import { User } from '../../user/entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth';

@UseGuards(new AuthGuard())
@Resolver(CopingCard)
export class CopingCardResolver {
  constructor(private readonly copingCardService: CopingCardService) {}

  @Query(() => [CopingCard])
  async copingCards(@Args('userId') userId: string) {
    return this.copingCardService.getAll(userId);
  }

  @Query(() => CopingCard)
  async copingCard(@Args('copingCardId') copingCardId: string) {
    return this.copingCardService.getById(copingCardId);
  }

  @Mutation(() => CopingCard)
  copingCardCreate(
    @Context('user') user: User,
    @Args('input') input: CreateCopingCardInput,
  ) {
    return this.copingCardService.create(input, user);
  }

  @Mutation(() => CopingCard)
  copingCardUpdate(@Args('input') input: UpdateCopingCardInput) {
    return this.copingCardService.update(input);
  }

  @Mutation(() => CopingCard)
  copingCardDelete(@Args('input') input: DeleteCopingCardInput) {
    return this.copingCardService.delete(input);
  }

  @Query(() => CopingCardTechnic)
  async copingCardTechnic(
    @Args('copingCardId') copingCardId: string,
    @Args('copingCardTechnicId') copingCardTechnicId: string,
  ) {
    return this.copingCardService.getCopingCardTechnicById(
      copingCardId,
      copingCardTechnicId,
    );
  }

  @Mutation(() => CopingCardTechnic)
  copingCardTechnicCreate(@Args('input') input: CopingCardTechnicCreateInput) {
    return this.copingCardService.createTechnic(input);
  }

  @Mutation(() => CopingCardTechnic)
  copingCardTechnicUpdate(@Args('input') input: CopingCardTechnicUpdateInput) {
    return this.copingCardService.updateTechnic(input);
  }

  @Mutation(() => CopingCardTechnic)
  copingCardTechnicDelete(@Args('input') input: CopingCardTechnicDeleteInput) {
    return this.copingCardService.technicDelete(input);
  }

  @Query(() => TechnicDoing)
  copingCardTechnicDoing(@Args('input') input: TechnicDoingFindOneInput) {
    return this.copingCardService.technicDoingFindOne(input);
  }

  @Mutation(() => TechnicDoing)
  copingCardTechnicDoingCreate(@Args('input') input: TechnicDoingCreateInput) {
    return this.copingCardService.technicDoingCreate(input);
  }

  @Mutation(() => TechnicDoing)
  copingCardTechnicDoingStartEmotionIntensityUpdate(
    @Args('input') input: TechnicDoingStartEmotionIntensityUpdateInput,
  ) {
    return this.copingCardService.doingStartEmotionIntensityUpdate(input);
  }

  @Mutation(() => TechnicDoing)
  copingCardTechnicDoingEndEmotionIntensityUpdate(
    @Args('input') input: TechnicDoingEndEmotionIntensityUpdateInput,
  ) {
    return this.copingCardService.doingEndEmotionIntensityUpdate(input);
  }

  @Mutation(() => TechnicDoing)
  copingCardTechnicDoingFinish(@Args('input') input: TechnicDoingFinishInput) {
    return this.copingCardService.technicDoingFinish(input);
  }

  @Mutation(() => TechnicDoing)
  copingCardTechnicDoingDelete(@Args('input') input: TechnicDoingDeleteInput) {
    return this.copingCardService.technicDoingDelete(input);
  }
}
