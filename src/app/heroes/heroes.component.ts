import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
// import { HEROES } from "../mock-heroes";

// Imports our Mock heroes through a service
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

// component contains 3 Metadata properties
@Component({
  selector: "app-heroes", // the component's CSS element selector
  templateUrl: "./heroes.component.html", // the location of the component's template file.
  styleUrls: ["./heroes.component.scss"], // the location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // set heroes to empty array (was mock data before)
  selectedHero?: Hero; // If selectedHero exists, set interface to Hero

  // Defines a private heroService property and identifies it as a HeroService
  // injection site.
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  // Create method to retrieve the heroes from the services
  getHeroes(): void {
    // Tghe subscribe() method passes the emitted array
    // to the callback, which sets the component's heroes property
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  // Calling getHeroes() in ngOnInit() /bc it's a lifecycle hook
  ngOnInit(): void {
    this.getHeroes();
  }
  // Event listener => {id: "", name: ""}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
