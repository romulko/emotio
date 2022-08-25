import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AbcDeleteInput {
  @Field()
  _id: string;
}

@InputType()
export class AbcUpdateSituationInput {
  @Field({ nullable: true })
  _id?: string;

  @Field()
  situation: string;
}

@InputType()
export class AbcUpdateConsequencesInput {
  @Field({ nullable: true })
  _id?: string;

  @Field()
  consequences: string;
}

@InputType()
export class AbcMindInput {
  @Field({ nullable: true })
  _id?: string;

  @Field()
  abcId: string;

  @Field({ nullable: true })
  text?: string;
}

@InputType()
export class AbcDeleteMindInput {
  @Field({ nullable: true })
  _id?: string;

  @Field()
  abcId: string;
}

@InputType()
export class AddLifeAreaInput {
  @Field()
  abcId: string;

  @Field()
  lifeAreaId: string;
}

@InputType()
export class DeleteLifeAreaInput {
  @Field({ nullable: true })
  _id?: string;

  @Field()
  abcId: string;
}

@InputType()
export class AbcBehaviourInput {
  @Field({ nullable: true })
  _id?: string;

  @Field()
  abcId: string;

  @Field({ nullable: true })
  text: string;
}

@InputType()
export class AddEmotionInput {
  @Field()
  emotionId: string;

  @Field()
  abcId: string;
}

@InputType()
export class AbcUpdateEmotionIntensityInput {
  @Field()
  emotionId: string;

  @Field()
  abcId: string;

  @Field()
  intensity: number;
}

@InputType()
export class AbcDeleteAudioInput {
  @Field()
  abcId: string;

  @Field()
  audioId: string;
}

@InputType()
export class AbcAddAudioTextHighlightInput {
  @Field()
  abcId: string;

  @Field()
  audioId: string;

  @Field()
  startIndex: number;

  @Field()
  endIndex: number;
}

@InputType()
export class AbcDeleteAudioTextHighlightInput {
  @Field()
  abcId: string;

  @Field()
  audioId: string;

  @Field()
  audioTextHighlightId: string;
}
