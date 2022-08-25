import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Emotion {
  @Field()
  _id: string;

  @Field()
  text: string;
}
