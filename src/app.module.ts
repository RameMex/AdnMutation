import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MutationModule } from './mutation/mutation.module';

@Module({
  imports: [MutationModule,MongooseModule.forRoot('mongodb+srv://renemeza:db9Z6vOZTyy0RR9P@cluster0.m1qyk.mongodb.net/Guros')],
  controllers: [],
  providers: [],
})
export class AppModule {}
