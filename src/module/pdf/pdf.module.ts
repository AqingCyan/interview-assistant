import { Module } from '@nestjs/common'
import { PdfController } from './pdf.controller'
import { PdfService } from './pdf.service'
import { TaskModule } from '../task/task.module'

@Module({
  imports: [TaskModule],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
