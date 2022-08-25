import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { graphqlUploadExpress } from 'graphql-upload';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { UserModule } from './modules/user';
import { EmotionModule } from './modules/emotion';
import { LifeAreaModule } from './modules/lifeArea';
import { MessagesModule } from './modules/messages';
import { CopingCardModule } from './modules/copingCard';
import { DialogueModule } from './modules/dialogue';
import { AbcModule } from './modules/abc';
import { HomeWorkModule } from './modules/homeWork';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.prod'],
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          uri: configService.get<string>('DB_HOST'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        } as MongooseModuleOptions),
      inject: [ConfigService],
    }),

    GraphQLModule.forRoot({
      autoSchemaFile: `${process.cwd()}/schema.gql`,
      sortSchema: true,
      playground: process.env.NODE_ENV !== 'production',
      context: ({ req }) => ({ headers: req.headers }),
    }),

    AbcModule,
    UserModule,
    EmotionModule,
    LifeAreaModule,
    MessagesModule,
    CopingCardModule,
    DialogueModule,
    HomeWorkModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes('/graphql');
  }
}
