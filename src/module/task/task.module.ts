import { Module } from '@nestjs/common'
import { TaskService } from './task.service'
import { BullModule, BullModuleOptions } from '@nestjs/bull'
import { GptModule } from '../gpt/gpt.module'
import { TaskConsumer } from './task.consumer'

// TODO config it
export const queueOption: BullModuleOptions = { prefix: '{resumeLocal}', name: 'pdf-analysis-local' }

@Module({
  imports: [BullModule.registerQueue(queueOption), GptModule],
  providers: [TaskService, TaskConsumer],
  exports: [TaskService],
})
export class TaskModule {}
