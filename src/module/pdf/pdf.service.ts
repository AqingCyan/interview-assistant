import { Injectable } from '@nestjs/common'
import * as pdfParse from 'pdf-parse'
import { TaskService } from '../task/task.service'

@Injectable()
export class PdfService {
  constructor(private readonly taskService: TaskService) {}

  async parsePdf(buffer: Buffer) {
    const data = await pdfParse(buffer)
    return await this.taskService.handleJobCreate(data.text)
  }
}
