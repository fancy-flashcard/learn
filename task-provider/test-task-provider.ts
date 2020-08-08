import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { TaskProvider } from "./task-provider.ts";
import { ITask } from "../types.ts";

Deno.test("test getTutor", async (): Promise<void> => {

    const questionId: string  = '4711'
    const taskProvider = new TaskProvider()
    const actualResponse: ITask = taskProvider.getTaskRelatedToQuestion(questionId)

    assertEquals('Increase Test Coverage of deno module', actualResponse.title)
    assertEquals('open', actualResponse.status)

});

