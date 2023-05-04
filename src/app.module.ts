import { Module } from '@nestjs/common';
import { PdfModule } from './module/pdf/pdf.module';

@Module({
  imports: [PdfModule],
})
export class AppModule {}
