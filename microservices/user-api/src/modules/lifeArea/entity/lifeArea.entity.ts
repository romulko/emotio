import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LifeArea {
  @Field()
  _id: string;

  @Field()
  text: string;
}
