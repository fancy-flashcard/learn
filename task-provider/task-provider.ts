import { ITask } from '../types.ts'

export class TaskProvider {

    public getTaskRelatedToQuestion(questionId: string): ITask {
        return {
            title: 'Increase Test Coverage of deno module',
            description: 'The test coverage (statement coverage) of https://deno.land/x/learn is pretty good however it is not 100 percent. Please fix it.',
            fundingInEth: 0.000001,
            status: 'open'
        }
    }
}