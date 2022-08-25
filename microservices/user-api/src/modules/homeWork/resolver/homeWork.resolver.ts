import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../user/entity';
import { HomeWork } from '../objectType/homeWork';
import { HomeWorkService } from '../service/homeWork.service';
import {
  HomeWorkCreateInput,
  HomeWorkDeleteInput,
  HomeWorkUpdateInput,
} from '../objectType/homeWork.input';

@UseGuards(new AuthGuard())
@Resolver()
export class HomeWorkResolver {
  constructor(private readonly homeWorkService: HomeWorkService) {}

  @Query(() => [HomeWork])
  async homeWorks(@Args('userId') userId: string) {
    return this.homeWorkService.getAll(userId);
  }

  @Query(() => HomeWork, { nullable: true })
  async homeWork(@Args('homeWorkId') homeWorkId: string) {
    return this.homeWorkService.getById(homeWorkId);
  }

  @Mutation(() => HomeWork)
  async homeWorkCreate(
    @Context('user') user: User,
    @Args('input') input: HomeWorkCreateInput,
  ) {
    return this.homeWorkService.create(input, user._id);
  }

  @Mutation(() => HomeWork)
  async homeWorkUpdate(
    @Context('user') user: User,
    @Args('input') input: HomeWorkUpdateInput,
  ) {
    return this.homeWorkService.update(input);
  }

  @Mutation(() => HomeWork)
  async homeWorkDelete(
    @Context('user') user: User,
    @Args('input') input: HomeWorkDeleteInput,
  ) {
    return this.homeWorkService.delete(input);
  }
}
