import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { ConversationProvider } from "./conversation-provider.ts";

Deno.test("test getResponse", async (): Promise<void> => {

    const learningConversationProvider = new ConversationProvider()
    const actualResponse: string = await learningConversationProvider.getResponse('How can we establish cozy ecosystems on additional planets like mars?')

    const expectedResponse = "Go with the flow."

    assertEquals(expectedResponse, actualResponse)

});

