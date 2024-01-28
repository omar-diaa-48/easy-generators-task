import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const DATABASE_URI = configService.get<string>("DATABASE_URI")

        return {
          uri: DATABASE_URI,
          retryAttempts: 5,
          retryDelay: 3000,
        }
      },

      inject: [ConfigService]
    })
  ],
})
export class AppModule { }
