import { Injectable, Logger } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { firstValueFrom, catchError } from 'rxjs'
import { AxiosError } from 'axios'

@Injectable()
export class GptService {
  private readonly logger = new Logger(GptService.name)

  constructor(private readonly httpService: HttpService) {}

  async complete(prompt: string) {
    const reqData = {
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }
    const { data } = await firstValueFrom(
      this.httpService
        .post('/v1/completions', reqData, {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data)
            throw 'An error happened!'
          }),
        ),
    )
    return data
  }
}
