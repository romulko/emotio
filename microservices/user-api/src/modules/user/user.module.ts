import { Module } from '@nestjs/common';
import { UserResolver } from './resolver';
import { UserService } from './service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserResolver, UserService],
  exports: [UserService],
})
export class UserModule {}
