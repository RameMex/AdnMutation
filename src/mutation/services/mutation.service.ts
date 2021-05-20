import Adn from '../interfaces/adn.interface';
import {CreateAdnDTO} from '../dto/adn.dto';
import {Model} from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import Mutation from '../utils/Mutation';
import Stats from '../interfaces/stats.interface';
export class MutationService {
    constructor(
        @InjectModel('Adn') private readonly adnModel: Model<Adn>,
        @InjectModel('Stats') private readonly statsModel: Model<Stats>
        ) {}

    async findAdn(createAdnDTO : CreateAdnDTO): Promise<Adn>{
        const isAnotherADN = await this.adnModel.findOne({dna:createAdnDTO.dna});
        return isAnotherADN
    }

    async createAdn(createAdnDTO : CreateAdnDTO): Promise<Adn>{
        if(await this.findAdn(createAdnDTO)) return
        const newAdn = new this.adnModel(createAdnDTO);
        return await newAdn.save()
    }
    async updateMutations(){
        const getStats = await this.getStats()
        const mutations = getStats.count_mutations
        return await this.statsModel.findByIdAndUpdate('60a645d487303da238dd1bbe',{count_mutations:mutations+1})

    }
    async updateNoMutations(){
        const getStats = await this.getStats()
        const NoMutations = getStats.count_no_mutations
        return await this.statsModel.findByIdAndUpdate('60a645d487303da238dd1bbe',{count_no_mutations:NoMutations+1})
    }
    async updateRatio(){
        const getStats = await this.getStats()
        console.log(getStats)
        const noMutations = getStats.count_no_mutations
        console.log(noMutations)
        const mutations = getStats.count_mutations
        console.log(mutations)

        const ratio = mutations/noMutations
        console.log(ratio)
        return await this.statsModel.findByIdAndUpdate('60a645d487303da238dd1bbe',{ratio:ratio})
    }   
    async getStats(){
        const getStats = await this.statsModel.findById('60a645d487303da238dd1bbe')
        return getStats
    }

    isMutantResult(createAdnDTO : CreateAdnDTO): Boolean{
        const mutation = new Mutation;
        const arr: Array<String> = Object.values(createAdnDTO)
        const result:Boolean = mutation.isMutant(arr[0])
        return result
    }
    updateStates(createAdnDTO : CreateAdnDTO){
        const isMutant = this.isMutantResult(createAdnDTO);
        if(isMutant){
            this.updateMutations();
        }else{
            this.updateNoMutations();
        }
        this.updateRatio();
    }


}
