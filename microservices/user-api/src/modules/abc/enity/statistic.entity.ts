import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EmotionStatisticElement {
  @Field()
  label: string;

  @Field()
  count: number;
}

@ObjectType()
export class LifeAreaStatisticElement {
  @Field()
  label: string;

  @Field()
  count: number;
}

@ObjectType()
export class AbcStatistic {
  @Field()
  userId: string;

  @Field(() => [EmotionStatisticElement])
  emotions: EmotionStatisticElement[];

  @Field(() => [LifeAreaStatisticElement])
  lifeAreas: LifeAreaStatisticElement[];
}
