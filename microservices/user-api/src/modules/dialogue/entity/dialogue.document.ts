import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DialogueType } from '../objectType/enum';

@Schema()
export class QuestionEntity {
  _id: string;

  @Prop()
  dialogueQuestionId: string;

  @Prop()
  answer: string;
}

@Schema({ collection: 'dialogues' })
export class DialogueDocument extends Document {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true })
  dialogueType: DialogueType;

  @Prop([QuestionEntity])
  questions: QuestionEntity[];
}

export const DialogueSchema = SchemaFactory.createForClass(DialogueDocument);
