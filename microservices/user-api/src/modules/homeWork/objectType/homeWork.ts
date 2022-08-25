import { Field, ObjectType } from '@nestjs/graphql';
import { Dialogue } from '../../dialogue/objectType/objectTypes';

@ObjectType()
export class Link {
  @Field()
  _id: string;

  @Field()
  dialogueId: string;
}

@ObjectType()
export class CompletedHomeWork {
  @Field()
  _id: string;

  @Field()
  text: string;
}

@ObjectType()
export class HomeWork {
  @Field()
  _id: string;

  @Field()
  userId: string;

  @Field()
  whatToDo: string;

  @Field()
  whatWeGet: string;

  @Field(() => [Dialogue])
  links: Dialogue[];

  @Field(() => [CompletedHomeWork])
  completedHomeWorks: CompletedHomeWork[];
}
