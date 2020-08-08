export interface ICard {
    id: number;
    q: string;
    a: string;
    r?: ICardRating[];
  }

  export interface ICardRating {
    t: number;
    r: number;
  }