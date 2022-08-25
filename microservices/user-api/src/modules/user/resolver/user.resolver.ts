import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../service';
import {
  LoginResponse,
  User,
  UserLoginInput,
  UserUpdateAudioRecognizeLanguageCodeInput,
  UserUpdateLanguageCodeInput,
} from '../entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(new AuthGuard())
  async me(@Context('user') user: Pick<User, '_id'>) {
    return this.userService.getById(user._id);
  }

  @Query(() => User, { nullable: true })
  async user(@Args('_id') _id: string) {
    return this.userService.getById(_id);
  }

  @Mutation(() => LoginResponse)
  async login(@Args('user') user: UserLoginInput) {
    return this.userService.login(user);
  }

  @Mutation(() => User)
  @UseGuards(new AuthGuard())
  async userUpdateLanguageCode(
    @Args('languageCodeInput') languageCodeInput: UserUpdateLanguageCodeInput,
  ) {
    return this.userService.updateLanguageCode(languageCodeInput);
  }

  @Mutation(() => User)
  @UseGuards(new AuthGuard())
  async userUpdateAudioRecognizeLanguageCode(
    @Args('audioRecognizeLanguageCodeInput')
    audioRecognizeLanguageCodeInput: UserUpdateAudioRecognizeLanguageCodeInput,
  ) {
    return this.userService.updateAudioRecognizeLanguageCode(
      audioRecognizeLanguageCodeInput,
    );
  }
}
