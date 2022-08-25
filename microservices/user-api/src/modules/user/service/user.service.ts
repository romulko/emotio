import { Injectable, Logger } from '@nestjs/common';
import {
  LoginResponse,
  User,
  UserLoginInput,
  UserUpdateAudioRecognizeLanguageCodeInput,
  UserUpdateLanguageCodeInput,
} from '../entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  getById(_id: string) {
    this.logger.debug(`getById. userId: ${_id}`);

    return this.userModel.findById(_id);
  }

  getByEmail(email: string) {
    this.logger.debug(`getByEmail. email: ${email}`);

    return this.userModel.findOne({ email });
  }

  async login(loginInput: UserLoginInput) {
    this.logger.debug(`login. user: ${JSON.stringify(loginInput)}`);

    let user = await this.getByEmail(loginInput.email);

    const isRegistered = !!user;

    if (!user) {
      user = new this.userModel(loginInput);
      user.name = !!loginInput.name ? loginInput.name : 'Пользователь';
      user.languageCode = loginInput.languageCode;
      user.audioRecognizeLanguageCode = user.languageCode;

      await user.save();
    }

    return { token: this.createToken(user), isRegistered } as LoginResponse;
  }

  private createToken({ _id }: User) {
    return jwt.sign({ _id }, 'secret');
  }

  async updateLanguageCode(languageCodeInput: UserUpdateLanguageCodeInput) {
    this.logger.debug(
      `updateLanguageCode ${JSON.stringify(languageCodeInput)}`,
    );

    const user = await this.userModel.findById(languageCodeInput.userId);
    user.languageCode = languageCodeInput.languageCode;

    user.save();

    return user;
  }

  async updateAudioRecognizeLanguageCode(
    audioRecognizeLanguageCodeInput: UserUpdateAudioRecognizeLanguageCodeInput,
  ) {
    this.logger.debug(
      `updateAudioRecognizeLanguageCode ${JSON.stringify(
        audioRecognizeLanguageCodeInput,
      )}`,
    );

    const user = await this.userModel.findById(
      audioRecognizeLanguageCodeInput.userId,
    );
    user.audioRecognizeLanguageCode =
      audioRecognizeLanguageCodeInput.audioRecognizeLanguageCode;

    user.save();

    return user;
  }
}
