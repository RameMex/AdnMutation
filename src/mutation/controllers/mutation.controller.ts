import { Controller, Get,Post,Body} from '@nestjs/common';
import { Response } from 'express';
import { CreateAdnDTO } from '../dto/adn.dto';
import {MutationService} from '../services/mutation.service';

@Controller()
export class MutationController {
    constructor(private mutationService: MutationService){}

    @Post('mutation')
    mutation(@Body() createAdnDTO:CreateAdnDTO){
        this.mutationService.updateStates(createAdnDTO);
        this.mutationService.createAdn(createAdnDTO);
        return this.mutationService.isMutantResult(createAdnDTO);
    }
    @Get('stats')
    stats(){
        return this.mutationService.getStats();
    }
}   
