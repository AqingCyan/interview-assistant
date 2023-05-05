import { Module } from '@nestjs/common'
import { GptService } from './gpt.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule.register({ baseURL: 'https://api.openai.com' })],
  providers: [GptService],
  exports: [GptService],
})
export class GptModule {}
