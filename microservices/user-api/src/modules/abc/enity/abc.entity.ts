import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Mind {
  @Field()
  _id: string;

  @Prop()
  @Field()
  text: string;
}

@Schema()
@ObjectType()
export class AbcEmotion {
  @Field()
  _id: string;

  @Prop()
  @Field()
  emotionId: string;

  @Prop()
  @Field({ nullable: true })
  intensity: number;
}

@Schema()
@ObjectType()
export class AbcLifeArea {
  @Field()
  _id: string;

  @Prop()
  @Field()
  lifeAreaId: string;
}

@Schema()
@ObjectType()
export class Behaviour {
  @Field()
  _id: string;

  @Prop()
  @Field()
  text: string;
}

@Schema()
@ObjectType()
export class AudioTextHighlight {
  @Field()
  _id: string;

  @Prop()
  @Field()
  audioId: string;

  @Prop()
  @Field()
  mindId: string;

  @Prop()
  @Field()
  startIndex: number;

  @Prop()
  @Field()
  endIndex: number;
}

@ObjectType()
export class AudioTextHighlightWithMind {
  @Field(() => Mind)
  mind: Mind;

  @Field(() => AudioTextHighlight)
  audioTextHighlight: AudioTextHighlight;
}

@ObjectType()
export class MindWithAudioTextHighlight {
  @Field(() => Mind)
  mind: Mind;

  @Field(() => AudioTextHighlight, { nullable: true })
  audioTextHighlight?: AudioTextHighlight;
}

@Schema()
@ObjectType()
export class Audio {
  @Field()
  _id: string;

  @Prop()
  @Field({ nullable: true })
  text: string;

  @Prop([AudioTextHighlight])
  @Field(() => [AudioTextHighlight])
  highlights: AudioTextHighlight[];
}

@Schema()
@ObjectType()
export class Abc extends Document {
  @Field()
  _id: string;

  @Prop({ required: true, index: true })
  @Field()
  userId: string;

  @Prop([Audio])
  @Field(() => [Audio])
  audios: Audio[];

  @Prop()
  @Field({ nullable: true })
  situation?: string;

  @Prop([AbcEmotion])
  @Field(() => [AbcEmotion])
  emotions: AbcEmotion[];

  @Prop([AbcLifeArea])
  @Field(() => [AbcLifeArea])
  lifeAreas: AbcLifeArea[];

  @Prop([Mind])
  @Field(() => [Mind])
  minds: Mind[];

  @Prop([Behaviour])
  @Field(() => [Behaviour])
  behaviours: Behaviour[];

  @Prop()
  @Field({ nullable: true })
  consequences?: string;
}

export const AbcSchema = SchemaFactory.createForClass(Abc);
