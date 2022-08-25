import { Field, InputType } from '@nestjs/graphql';
import { DialogueType } from './enum';

@InputType()
export class DialogueCreateInput {
  @Field()
  dialogueType: DialogueType;
}

@InputType()
export class DialogueAnswerInput {
  @Field()
  dialogueId: string;

  @Field()
  questionId: string;

  @Field()
  answer: string;
}

@InputType()
export class DialogueUpdateAnswerInput extends DialogueAnswerInput {}

@InputType()
export class DialogueDeleteInput {
  @Field()
  dialogueId: string;
}
