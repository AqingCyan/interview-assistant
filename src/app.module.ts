import { Module } from '@nestjs/common'
import { PdfModule } from './module/pdf/pdf.module'
import { TaskModule } from './module/task/task.module'
import { GptModule } from './module/gpt/gpt.module'
import { BullModule } from '@nestjs/bull'

const bullConfig = { redis: { host: 'localhost', port: 6379 } }

@Module({
  imports: [BullModule.forRoot(bullConfig), PdfModule, TaskModule, GptModule],
})
export class AppModule {}
