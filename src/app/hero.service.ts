import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { MessageService } from "./message.service";

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: "root",
})
export class HeroService {
  // Example of service-in-service
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  /* Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = "api/heroes"; // URL to the web api

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote loggin infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  // Returns the mock heroes asynchronously with Http.get
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this.log("featured heroes")),
      catchError(this.handleError<Hero[]>("getHeroes", []))
    );
  }
  // getHero() for hero details and its id
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
