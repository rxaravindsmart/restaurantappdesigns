import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
Products:any=[
  {path:'../assets/menu/products/image1.jpg'},
  {path:'../assets/menu/products/image2.jpg'},
  {path:'../assets/menu/products/image3.jpeg'},
  {path:'../assets/menu/products/image4.jpg'},
  {path:'../assets/menu/products/image5.jpg'},
  {path:'../assets/menu/products/image6.jpg'}
]
}
