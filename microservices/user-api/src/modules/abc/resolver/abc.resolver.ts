import { Args, Query, Resolver } from '@nestjs/graphql';
import { AbcService } from '../service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth';
import { AbcStatistic } from '../enity/statistic.entity';

@UseGuards(new AuthGuard())
@Resolver()
export class AbcResolver {
  constructor(private readonly abcService: AbcService) {}

  @Query(() => AbcStatistic)
  async abcsStatistic(@Args('userId') userId: string) {
    return this.abcService.getAbcStatistic(userId);
  }

  // @Query(() => [Abc])
  // async abcs(@Args('userId') userId: string) {
  //   return this.abcService.getAll(userId);
  // }
  //
  // @Query(() => Abc, { nullable: true })
  // async abc(@Args('abcId') abcId: string) {
  //   return this.abcService.getById(abcId);
  // }
  //
  // @Mutation(() => Abc)
  // async abcCreate(@Context('user') user: User) {
  //   return this.abcService.create(user);
  // }
  //
  // @Mutation(() => Abc)
  // async abcDelete(@Args('abc') abc: AbcDeleteInput) {
  //   return this.abcService.delete(abc);
  // }
  //
  // @Mutation(() => Abc)
  // async abcUpdateSituation(
  //   @Args('situation') situationInput: AbcUpdateSituationInput,
  // ) {
  //   return this.abcService.updateSituation(situationInput);
  // }
  //
  // @Mutation(() => Mind)
  // async abcAddMind(@Args('mind') mindInput: AbcMindInput) {
  //   return this.abcService.addMind(mindInput);
  // }
  //
  // @Mutation(() => MindWithAudioTextHighlight)
  // async abcDeleteMind(@Args('input') input: AbcDeleteMindInput) {
  //   return this.abcService.deleteMind(input);
  // }
  //
  // @Mutation(() => Behaviour)
  // async abcAddBehaviour(@Args('behaviour') behaviourInput: AbcBehaviourInput) {
  //   return this.abcService.addBehaviour(behaviourInput);
  // }
  //
  // @Mutation(() => Behaviour)
  // async abcDeleteBehaviour(
  //   @Args('behaviour') behaviourInput: AbcBehaviourInput,
  // ) {
  //   return this.abcService.deleteBehaviour(behaviourInput);
  // }
  //
  // @Mutation(() => AbcEmotion)
  // async abcAddEmotion(@Args('emotion') emotionInput: AddEmotionInput) {
  //   return this.abcService.addEmotion(emotionInput);
  // }
  //
  // @Mutation(() => AbcEmotion)
  // async abcDeleteEmotion(@Args('emotion') emotionInput: AddEmotionInput) {
  //   return this.abcService.deleteEmotion(emotionInput);
  // }
  //
  // @Mutation(() => AbcEmotion, { nullable: true })
  // async abcUpdateEmotionIntensity(
  //   @Args('emotion') emotionInput: AbcUpdateEmotionIntensityInput,
  // ) {
  //   return this.abcService.updateEmotionIntensity(emotionInput);
  // }
  //
  // @Mutation(() => AbcLifeArea)
  // async abcAddLifeArea(@Args('lifeArea') lifeAreaInput: AddLifeAreaInput) {
  //   return this.abcService.addLifeArea(lifeAreaInput);
  // }
  //
  // @Mutation(() => AbcLifeArea)
  // async abcDeleteLifeArea(
  //   @Args('lifeArea') lifeAreaInput: DeleteLifeAreaInput,
  // ) {
  //   return this.abcService.deleteLifeArea(lifeAreaInput);
  // }
  //
  // @Query(() => Audio, { nullable: true })
  // async abcAudio(
  //   @Args('abcId') abcId: string,
  //   @Args('audioId') audioId: string,
  // ) {
  //   return this.abcService.getAudio(abcId, audioId);
  // }
  //
  // @Mutation(() => Audio)
  // async abcAddAudio(
  //   @Args('abcId') abcId: string,
  //   @Args({ name: 'audioFile', type: () => GraphQLUpload })
  //   audioFileUpload: FileUpload,
  // ) {
  //   return this.abcService.addAudio(abcId, audioFileUpload);
  // }
  //
  // @Mutation(() => Audio)
  // async abcDeleteAudio(@Args('audio') audioInput: AbcDeleteAudioInput) {
  //   return this.abcService.deleteAudio(audioInput);
  // }
  //
  // @Mutation(() => AudioTextHighlightWithMind)
  // async abcAddAudioTextHighlight(
  //   @Args('audioTextHighlight')
  //   audioTextHighlight: AbcAddAudioTextHighlightInput,
  // ) {
  //   return this.abcService.addAudioTextHighlight(audioTextHighlight);
  // }
  //
  // @Mutation(() => AudioTextHighlight)
  // async abcDeleteAudioTextHighlight(
  //   @Args('audioTextHighlight')
  //   audioTextHighlight: AbcDeleteAudioTextHighlightInput,
  // ) {
  //   return this.abcService.deleteAudioTextHighlight(audioTextHighlight);
  // }
  //
  // @Mutation(() => Abc)
  // async abcUpdateConsequences(
  //   @Args('consequences') consequencesInput: AbcUpdateConsequencesInput,
  // ) {
  //   return this.abcService.updateConsequences(consequencesInput);
  // }
}
