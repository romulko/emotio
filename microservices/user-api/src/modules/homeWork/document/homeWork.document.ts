import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Link {
  _id: string;

  @Prop()
  dialogueId: string;
}

@Schema()
export class CompletedHomeWork {
  _id: string;

  @Prop()
  text: string;
}

@Schema({ collection: 'homeWork' })
export class HomeWorkDocument extends Document {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop()
  whatToDo: string;

  @Prop()
  whatWeGet: string;

  @Prop([Link])
  links: Link[];

  @Prop([CompletedHomeWork])
  completedHomeWorks: CompletedHomeWork[];
}

export const HomeWorkSchema = SchemaFactory.createForClass(HomeWorkDocument);
