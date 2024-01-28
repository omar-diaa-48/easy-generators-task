import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/easy-generators')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
