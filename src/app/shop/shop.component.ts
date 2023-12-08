import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  clicked=true
items:any=[
  {path:'../assets/home/burger1.png'},
  {path:'../assets/home/cooldrings.png'},
  {path:'../assets/home/humburger.png'},
  {path:'../assets/home/card/card-burger.png'},
  {path:'../assets/home/card/card-burger2.png'},
  {path:'../assets/menu/veg.png'},
  {path:'../assets/home/cooldrings.png'},
  {path:'../assets/home/humburger.png'},

]
open(){
  this.clicked=true
}
cancel(){
  this.clicked=false
}
}
