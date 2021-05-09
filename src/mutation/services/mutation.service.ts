import { Injectable } from '@nestjs/common';
import Adn from '../interfaces/adn.interface';
import {CreateAdnDTO} from '../dto/adn.dto';
import {Model} from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import Mutation from '../utils/Mutation';
@Injectable()
export class MutationService {
    constructor(@InjectModel('Adn') private readonly adnModel: Model<Adn>) {}

    async findAdn(createAdnDTO : CreateAdnDTO): Promise<Adn>{

        const mutation = new Mutation;
        const arr: Array<String> = Object.values(createAdnDTO)
        const nose = mutation.isMutant(arr[0])
        console.log(nose)
        const isAnotherADN = await this.adnModel.findOne({adn:createAdnDTO.dna});
        return isAnotherADN
    }

    async createAdn(createAdnDTO : CreateAdnDTO): Promise<Adn>{
        if(this.findAdn(createAdnDTO)) return
        const newAdn = new this.adnModel(createAdnDTO);
        return newAdn.save()
    }


}
