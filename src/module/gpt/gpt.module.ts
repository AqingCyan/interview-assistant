import { Module } from '@nestjs/common'
import { GptService } from './gpt.service'

@Module({
  providers: [GptService],
})
export class GptModule {}
