import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DialogueService } from '../service';
import { User } from '../../user/entity';
import { Dialogue, Question } from '../objectType/objectTypes';
import {
  DialogueAnswerInput,
  DialogueCreateInput,
  DialogueDeleteInput,
  DialogueUpdateAnswerInput,
} from '../objectType/dialogue.input';

@UseGuards(new AuthGuard())
@Resolver()
export class DialogueResolver {
  constructor(private readonly dialogueService: DialogueService) {}

  @Query(() => [Dialogue])
  async dialogues(@Args('userId') userId: string) {
    return this.dialogueService.getAll(userId);
  }

  @Query(() => Dialogue, { nullable: true })
  async dialogue(@Args('dialogueId') dialogueId: string) {
    return this.dialogueService.getById(dialogueId);
  }

  @Mutation(() => Dialogue)
  async dialogueCreate(
    @Context('user') user: User,
    @Args('input') input: DialogueCreateInput,
  ) {
    return this.dialogueService.create(input, user._id);
  }

  @Mutation(() => Question)
  async dialogueAnswer(@Args('input') input: DialogueAnswerInput) {
    return this.dialogueService.answer(input);
  }

  @Mutation(() => Question)
  async dialogueUpdateAnswer(@Args('input') input: DialogueUpdateAnswerInput) {
    return this.dialogueService.updateAnswer(input);
  }

  @Mutation(() => Dialogue)
  async dialogueDelete(@Args('input') input: DialogueDeleteInput) {
    return this.dialogueService.delete(input);
  }
}
