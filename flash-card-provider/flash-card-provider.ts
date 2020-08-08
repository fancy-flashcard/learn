import { ICard } from "../types.ts";

export class FlashCardProvider {

    public getNextCard(): ICard {
        return {
            id: 0,
            q: "How can we establish cozy ecosystems on additional planets like mars?",
            a: "Go with the flow."
        }
    }

    public getCardsByDeck(deckId: string): ICard[] {
        return [] // tbd
    }

    public getCardsByTopic(topic: string, level?: number): ICard[] {
        return [] // tbd
    }

    public getCardsByRating(rating: any): ICard[] {
        return [] // tbd
    }

    public getCardsByContributor(contributorId: string): ICard[] {
        return [] // tbd
    }
}