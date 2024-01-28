import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    MongooseModule.forRoot('mongodb://localhost/easy-generators')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
