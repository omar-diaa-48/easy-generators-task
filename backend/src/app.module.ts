import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import modules from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const DATABASE_URI = configService.get<string>("DATABASE_URI")

        return {
          uri: DATABASE_URI
        }
      },

      inject: [ConfigService]
    }),

    ...modules
  ]
})
export class AppModule { }
