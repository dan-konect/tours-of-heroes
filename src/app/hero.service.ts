import { Injectable } from "@angular/core";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: "root",
})
export class HeroService {
  // Returns the mock heroes asynchronously with Observables
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
  // getHero() for hero details and its id
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  // Example of service-in-service
  constructor(private messageService: MessageService) {}
}
