import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact:any=[
    {path:'../assets/contact/london.jpg',address:'77a First Floor, London Uk',ph1:'+111 823 8379',ph2:'+987 524 1522',mail:'Corprate@gmail.com',title:'UK, London'},
    {path:'../assets/contact/york.jpg',address:'77a First Floor, London Uk',ph1:'+111 823 8379',ph2:'+987 524 1522',mail:'Corprate@gmail.com',title:'USA, New York'},
    {path:'../assets/contact/rome.jpg',address:'77a First Floor, London Uk',ph1:'+111 823 8379',ph2:'+987 524 1522',mail:'Corprate@gmail.com',title:'Italy, Rome'},
    {path:'../assets/contact/paris.jpg',address:'77a First Floor, London Uk',ph1:'+111 823 8379',ph2:'+987 524 1522',mail:'Corprate@gmail.com',title:'France, Paris'},
  ]

}
