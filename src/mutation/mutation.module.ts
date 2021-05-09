import { Module } from '@nestjs/common';
import { MutationService } from './services/mutation.service';
import { MutationController } from './controllers/mutation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdnSchema } from './schemas/adns.schemas';

@Module({
  imports:[MongooseModule.forFeature([{name:'Adn',schema: AdnSchema}])],
  providers: [MutationService],
  controllers: [MutationController]
})
export class MutationModule {}
