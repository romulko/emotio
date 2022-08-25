import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class HomeWorkCreateInput {
  @Field()
  whatToDo: string;

  @Field()
  whatWeGet: string;
}

@InputType()
export class HomeWorkUpdateInput extends HomeWorkCreateInput {
  @Field()
  _id: string;
}

@InputType()
export class HomeWorkDeleteInput {
  @Field()
  _id: string;
}
