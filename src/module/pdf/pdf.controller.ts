import { Post, Controller, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { PdfService } from './pdf.service'

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('parse')
  @UseInterceptors(FileInterceptor('file'))
  async parsePdf(@UploadedFile() file): Promise<string> {
    return await this.pdfService.parsePdf(file.buffer)
  }
}
