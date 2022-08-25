import { Field, ObjectType } from '@nestjs/graphql';
import { DialogueType, QuestionType } from './enum';

@ObjectType()
export class SelectionItem {
  @Field()
  _id: string;

  @Field()
  text: string;
}

@ObjectType()
export class Selection {
  @Field()
  _id: string;

  @Field(() => [SelectionItem])
  items: SelectionItem[];

  @Field({ nullable: true })
  multiselect?: boolean;
}

@ObjectType()
export class Question {
  @Field()
  _id: string;

  @Field()
  questionType: QuestionType;

  /**
   * Selection will be present when questionType is SELECTIONS.
   * It will contain items for ButtonBar.
   */
  @Field(() => Selection, { nullable: true })
  selection?: Selection;

  @Field()
  dialogueQuestionId: string;

  @Field()
  text: string;

  @Field({ nullable: true })
  predefinedAnswer?: string;

  @Field({ nullable: true })
  answer?: string;
}

@ObjectType()
export class Dialogue {
  @Field()
  _id: string;

  @Field()
  userId: string;

  @Field()
  dialogueType: DialogueType;

  @Field(() => [Question])
  questions: Question[];
}
