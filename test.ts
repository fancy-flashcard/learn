import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { FlashCardProvider } from "./flashcardprovider.ts";
import { ICard } from "./types.ts";

Deno.test("processHostIds", async (): Promise<void> => {

    const flashCardProvider = new FlashCardProvider()
    const actualNextCard: ICard = await flashCardProvider.getNextCard()

    const expectedQuestionOfCard = "How can we establish cozy ecosystems on additional planets like mars?"
    const expectedAnswerOfCard = "Go with the flow."

    assertEquals(0, actualNextCard.id)
    assertEquals(expectedQuestionOfCard, actualNextCard.q)
    assertEquals(expectedAnswerOfCard, actualNextCard.a)

});
