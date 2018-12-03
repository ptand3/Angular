// Notice that the new service imports the Angular Injectable symbol and
//  annotates the class with the @Injectable() decorator. 
// it marks this class that used dependency injection system

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service' ;

@Injectable({
  providedIn: 'root'  //Accepts a metadata object for the service
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {  // HTTP Client methods get() Return the observables  with a single value the array of mock heroes 
  //Send some  message  after the Heroes are fetched
    this.messageService.add("Heroes are fetched");
    return of(HEROES); 
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
   
 // Anguar will create a messageService parameter and angular 
  // will inject single instance of messageService into that property
  constructor(private messageService : MessageService) { }
}
