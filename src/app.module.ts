import { Module } from '@nestjs/common'
import { PdfModule } from './module/pdf/pdf.module'
import { TaskModule } from './module/task/task.module'
import { GptModule } from './module/gpt/gpt.module'

@Module({
  imports: [PdfModule, TaskModule, GptModule],
})
export class AppModule {}
