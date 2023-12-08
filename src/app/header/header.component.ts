import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isActive:any
  styleOne:any
  styleTwo:any
  color1:any
  constructor(){

  }
  onclick(){
    this.isActive=true
    this.color1='black'
  }
  offclick(){
    this.color1='white'
  }
  onofclick(){
    this.color1='white'
  }

}
