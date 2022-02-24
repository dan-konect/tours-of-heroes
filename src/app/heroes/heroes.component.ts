import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

// component contains 3 Metadata properties
@Component({
  selector: "app-heroes", // the component's CSS element selector
  templateUrl: "./heroes.component.html", // the location of the component's template file.
  styleUrls: ["./heroes.component.scss"], // the location of the component's private CSS styles.
})
export class HeroesComponent implements OnInit {
  heroes = HEROES; // set heroes to mock database
  selectedHero?: Hero; // If selectedHero exists, set interface to Hero

  constructor() {}

  ngOnInit(): void {}
  // Event listener => {id: "", name: ""}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
