import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class TechnicDoing {
  @Field()
  _id: string;

  @Prop()
  @Field()
  startEmotionIntensity: number;

  @Prop({ nullable: true })
  @Field({ nullable: true })
  endEmotionIntensity?: number;

  @Prop({ nullable: true })
  @Field({ nullable: true })
  endDate: Date;
}

@Schema()
@ObjectType()
export class CopingCardTechnic {
  @Field()
  _id: string;

  @Prop()
  @Field()
  technicName: string;

  @Prop()
  @Field()
  description: string;

  @Prop()
  @Field()
  howToDescription: string;

  @Prop([TechnicDoing])
  @Field(() => [TechnicDoing])
  doings: TechnicDoing[];
}

@Schema()
@ObjectType()
export class CopingCard extends Document {
  @Field()
  _id: string;

  @Prop({ required: true, index: true })
  @Field()
  userId: string;

  @Prop()
  @Field()
  emotionId: string;

  @Prop()
  @Field({ nullable: true })
  mind?: string;

  @Prop([CopingCardTechnic])
  @Field(() => [CopingCardTechnic])
  technics: CopingCardTechnic[];
}

export const CopingCardSchema = SchemaFactory.createForClass(CopingCard);
