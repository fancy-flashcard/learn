import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { FlashCardProvider } from "./flash-card-provider.ts";
import { ICard } from "../types.ts";


Deno.test("test getNextCard", async (): Promise<void> => {

    const flashCardProvider = new FlashCardProvider()
    const actualNextCard: ICard = await flashCardProvider.getNextCard()

    const expectedQuestionOfCard = "How can we establish cozy ecosystems on additional planets like mars?"
    const expectedAnswerOfCard = "Go with the flow."

    assertEquals(0, actualNextCard.id)
    assertEquals(expectedQuestionOfCard, actualNextCard.q)
    assertEquals(expectedAnswerOfCard, actualNextCard.a)
});


Deno.test("test getCardsByDeck", async (): Promise<void> => {

    const flashCardProvider = new FlashCardProvider()
    const actualResult: ICard[] = await flashCardProvider.getCardsByDeck('xyz')

    assertEquals([], actualResult)
});


Deno.test("test getCardsByTopic", async (): Promise<void> => {

    const flashCardProvider = new FlashCardProvider()
    const actualResult: ICard[] = await flashCardProvider.getCardsByTopic('xyz')

    assertEquals([], actualResult)
});


Deno.test("test getCardsByRating", async (): Promise<void> => {

    const flashCardProvider = new FlashCardProvider()
    const actualResult: ICard[] = await flashCardProvider.getCardsByRating('xyz')

    assertEquals([], actualResult)
});


Deno.test("test getCardsByContributor", async (): Promise<void> => {

    const flashCardProvider = new FlashCardProvider()
    const actualResult: ICard[] = await flashCardProvider.getCardsByContributor('xyz')

    assertEquals([], actualResult)
});
