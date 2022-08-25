import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class User extends Document {
  @Field()
  _id: string;

  @Prop({ unique: true, index: true })
  @Field()
  email: string;

  @Prop()
  @Field()
  name: string;

  @Prop()
  @Field({ nullable: true })
  photo?: string;

  @Prop()
  @Field()
  languageCode: string;

  @Prop()
  @Field()
  audioRecognizeLanguageCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;

  @Field()
  isRegistered: boolean;
}
