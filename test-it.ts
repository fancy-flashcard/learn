// import { FlashCardProvider } from "https://deno.land/x/learn/flashcardprovider.ts"
import { FlashCardProvider } from "https://raw.githubusercontent.com/michael-spengler/learn/master/flashcardprovider.ts"

const card = FlashCardProvider.getNextCard()
console.log(`The name of the card is ${card.name}`)


