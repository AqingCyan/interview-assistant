import { Process, Processor } from '@nestjs/bull'
import { DoneCallback, Job } from 'bull'
import { GptService } from '../gpt/gpt.service'

@Processor('pdf-analysis-local')
export class TaskConsumer {
  constructor(private readonly gptService: GptService) {}

  @Process('generate-task')
  async processAnalysisJob(job: Job<{ pdfText: string }>, done: DoneCallback) {
    const data = await this.gptService.complete(`
      你是面试官，有一份简历，内容为：${job.data.pdfText}。
      尽可能列举出所有可以考察的且仅与开发有关的具体知识点，并且将值得重点考察的排在前面，不需要额外的解释，并且将其放在一个数组中展示，仅返回数组即可
      `)
    console.log(data)
    done()
  }
}
