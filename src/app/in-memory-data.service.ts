import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: "Dr. Not So Nice" },
      { id: 12, name: "Narcosist" },
      { id: 13, name: "Bombastotasti" },
      { id: 14, name: "Celeritasly" },
      { id: 15, name: "Magnetacism" },
      { id: 16, name: "Rubber Man, Gomu nomu no" },
      { id: 17, name: "Dynamasterbater" },
      { id: 18, name: "Dr 200 IQ" },
      { id: 19, name: "D Magma" },
      { id: 20, name: "Tornado Potatoes" },
    ];
    return { heroes };
  }

  // Overrides the henId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes arary is not empty, the method below returns the highest hero id + 1
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
