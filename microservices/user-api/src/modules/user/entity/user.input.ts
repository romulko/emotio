import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
  @Field()
  email: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  photo?: string;

  @Field()
  languageCode: string;
}

@InputType()
export class UserUpdateLanguageCodeInput {
  @Field()
  userId: string;

  @Field()
  languageCode: string;
}

@InputType()
export class UserUpdateAudioRecognizeLanguageCodeInput {
  @Field()
  userId: string;

  @Field()
  audioRecognizeLanguageCode: string;
}
