import { Module } from '@nestjs/common'
import { PdfController } from './pdf.controller'
import { PdfService } from './pdf.service'
import { GptModule } from '../gpt/gpt.module'

@Module({
  imports: [GptModule],
  controllers: [PdfController],
  providers: [PdfService],
})
export class PdfModule {}
