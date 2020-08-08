import { ICard } from "./types.ts";

export class FlashCardProvider {

    public getNextCard(): ICard {
        return {  
            id: 0,
            q: "How can we establish cozy ecosystems on additional planets like mars?",
            a: "Go with the flow."
        }
    }
}