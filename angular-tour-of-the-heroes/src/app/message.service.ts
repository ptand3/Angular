import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages :  string[]=[]; // creating messages  emptyarray of type string 

  add(message:string){    //adding a  message to an empty array
    this.messages.push(message);
  }
  clear(){               //clearing a message
    this.messages=[];
  }


  constructor()  {}
}
