//You always import the Component symbol from the Angular core library 
//and annotate the component class with @Component.
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',  //element selector for the HeroesComponent
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;    //binding mock heroes array inside a component; There is no selected hero when the app starts
  // }

  //  parameter simultaneously defines a private
  //  heroService property and identifies it as a HeroService injection site.
  //  When the angular creates HeroesComponent the Dependecy injection system will 
  //  set the heroService parameter as a single instance of the HeroService
  constructor(private heroService: HeroService) {}
   
  // getHeroes(): void {
  //     this.heroes = this.heroService.getHeroes(); //synchronous way of fetching heroes
  //  }
  

  // It will wait for the observable to emit the arrays ,as soon
  //it the subscribe would emit to the callback which which sets the components hero property from the mock arrays
  getHeroes(): void {  
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {                                                    
      this.getHeroes();
  }

}
