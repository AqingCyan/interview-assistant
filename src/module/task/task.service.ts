import { Injectable } from '@nestjs/common'
import { InjectQueue } from '@nestjs/bull'
import { Queue } from 'bull'

@Injectable()
export class TaskService {
  constructor(@InjectQueue('pdf-analysis-local') private readonly analysisQueue: Queue) {}

  async handleJobCreate(pdfText: string) {
    const options = { timeout: 80 * 1000, backoff: 3000, attempts: 4 }
    return await this.analysisQueue.add('generate-task', { pdfText }, options)
  }
}
