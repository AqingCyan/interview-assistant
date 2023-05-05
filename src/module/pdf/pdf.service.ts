import { Injectable } from '@nestjs/common'
import * as pdfParse from 'pdf-parse'
import { GptService } from '../gpt/gpt.service'

@Injectable()
export class PdfService {
  constructor(private readonly gptService: GptService) {}

  async parsePdf(buffer: Buffer) {
    const data = await pdfParse(buffer)
    return await this.gptService.complete(
      `
      你是面试官，有一份简历，内容为：${data.text}。
      尽可能列举出所有可以考察的且仅与开发有关的具体知识点，并且将值得重点考察的排在前面，不需要额外的解释，并且将其放在一个数组中展示，仅返回数组即可
      `,
    )
  }
}
