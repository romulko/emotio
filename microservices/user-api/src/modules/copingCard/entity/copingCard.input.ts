import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TechnicDoingFindOneInput {
  @Field()
  copingCardId: string;

  @Field()
  technicId: string;

  @Field()
  doingId: string;
}

@InputType()
export class TechnicDoingCreateInput {
  @Field()
  copingCardId: string;

  @Field()
  technicId: string;
}

@InputType()
export class TechnicDoingFinishInput extends TechnicDoingCreateInput {
  @Field()
  doingId: string;
}

@InputType()
export class TechnicDoingDeleteInput extends TechnicDoingCreateInput {
  @Field()
  doingId: string;
}

@InputType()
export class TechnicDoingStartEmotionIntensityUpdateInput extends TechnicDoingCreateInput {
  @Field()
  doingId: string;

  @Field()
  startEmotionIntensity: number;
}

@InputType()
export class TechnicDoingEndEmotionIntensityUpdateInput extends TechnicDoingCreateInput {
  @Field()
  doingId: string;

  @Field()
  endEmotionIntensity: number;
}

@InputType()
export class CopingCardTechnicCreateInput {
  @Field()
  copingCardId: string;

  @Field()
  technicName: string;

  @Field()
  description: string;

  @Field()
  howToDescription: string;
}

@InputType()
export class CopingCardTechnicUpdateInput extends CopingCardTechnicCreateInput {
  @Field({ nullable: true })
  _id: string;
}

@InputType()
export class CopingCardTechnicDeleteInput {
  @Field()
  _id: string;

  @Field()
  copingCardId: string;
}

@InputType()
export class CreateCopingCardInput {
  @Field()
  emotionId: string;

  @Field({ nullable: true })
  mind: string;
}

@InputType()
export class UpdateCopingCardInput extends CreateCopingCardInput {
  @Field()
  _id: string;
}

@InputType()
export class DeleteCopingCardInput {
  @Field()
  _id: string;
}
