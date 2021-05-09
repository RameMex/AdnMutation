import { Controller, Get,Post,Body } from '@nestjs/common';
import { CreateAdnDTO } from '../dto/adn.dto';
import {MutationService} from '../services/mutation.service';

@Controller()
export class MutationController {
    constructor(private mutationService: MutationService){}

    @Post('mutation')
    mutation(@Body() createAdnDTO:CreateAdnDTO){
        
        const bus = this.mutationService.createAdn(createAdnDTO);
        return bus;
    }
    @Get('stats')
    stats(){
        return 'estadisticas'
    }
}   
