// The MessagesComponent should display all messages, including the message sent 
// by the HeroService when it fetches heroes

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor( public messageService : MessageService) { } //publci because this message is going to be bound to the template 

  ngOnInit() {
  }

}
