import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographyDto } from './dtos';
import { ProsConsDiscusserDto } from './dtos/prosConsDicusserDto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

 @Post('orthography-check')
 orthographyCheck(
  @Body() orthographyDto: OrthographyDto,
 ){

  
 return this.gptService.orthographyCheck(orthographyDto); 
}

@Post('pros-cons-discusser')
prosConsDicusser(
  @Body() prosConsDiscusserDto: ProsConsDiscusserDto) {
    return this.gptService.prosConsDicusser(prosConsDiscusserDto);
  }

}
