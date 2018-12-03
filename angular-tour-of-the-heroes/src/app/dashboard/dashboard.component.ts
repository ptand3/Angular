import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[]= [];
 
  //  parameter simultaneously defines a private
  //  heroService property and identifies it as a HeroService injection site.
  //  When the angular creates HeroesComponent the Dependecy injection system will 
  //  set the heroService parameter as a single instance of the HeroService
  constructor(private heroService: HeroService) {}
   
  // getHeroes(): void {
  //     this.heroes = this.heroService.getHeroes(); //synchronous way of fetching heroes
  //  }
  ngOnInit() {                                                    
    this.getHeroes();
}

  // It will wait for the observable to emit the arrays ,as soon
  //it the subscribe would emit to the callback which which sets the components hero property from the mock arrays
  getHeroes(): void {  
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
  

}

  