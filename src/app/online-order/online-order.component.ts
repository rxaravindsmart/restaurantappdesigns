import { Component } from '@angular/core';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent {
items:any=[
  {path:'../assets/home/gal/burger1.jpg',title:'Cha Resturant'},
  {path:'../assets/home/gal/burger2.jpeg',title:'SHA Hotel'},
  {path:'../assets/home/gal/burger3.jpeg',title:'Burger Shop'},
  {path:'../assets/home/gal/burger4.jpg',title:'Cha Resturant'},
  {path:'../assets/home/gal/burger5.jpeg',title:'SHA Hotel'},
  {path:'../assets/home/gal/burger6.jpeg',title:'Burger Shop'}
]
card_images:any=[
  {title:'Italian Plattin',path:'../assets/home/gal/burger1.jpg',rate:'4.5'},
  {title:'Thai Platter',path:'../assets/home/gal/burger2.jpeg',rate:'4.3'},
  {title:'Chicken CUry',path:'../assets/home/gal/burger3.jpeg',rate:'4.7'},
  {title:'Masala Fry',path:'../assets/home/gal/burger4.jpg',rate:'3.7'},
]
menu_items:any=[
  {path:'../assets/shop/item1.jpg',title:'Biriyani'},
  {path:'../assets/shop/item2.jpg',title:'Desert'},
  {path:'../assets/shop/item3.jfif',title:'Poori'},
  {path:'../assets/shop/item4.jpg',title:'Drings'},
  {path:'../assets/shop/item5.jpg',title:'Ice Cream'},
  {path:'../assets/shop/item6.jpg',title:'Platter'},
  {path:'../assets/shop/item7.jpg',title:'Rice Meals'},
  {path:'../assets/shop/item8.jpg',title:'Platter'}
]
resturant:any=[
  {title:'Italian Plattin',path:'../assets/home/gal/burger1.jpg',rate:'4.5',view:'570'},
  {title:'Thai Platter',path:'../assets/home/gal/burger2.jpeg',rate:'4.3',view:'330'},
  {title:'Chicken CUry',path:'../assets/home/gal/burger3.jpeg',rate:'4.7',view:'420'},
  {title:'Masala Fry',path:'../assets/home/gal/burger4.jpg',rate:'3.7',view:'180'},
]
bot_items:any=[
  {title:'Italian Lover ',path:'../assets/home/gal/burger1.jpg',rate:'4.5',view:'570',time:'30'},
  {title:'Pasteries Cake ',path:'../assets/home/gal/burger2.jpeg',rate:'4.3',view:'330',time:'20'},
  {title:'Snaks Lover ',path:'../assets/home/gal/burger3.jpeg',rate:'4.2',view:'420',time:'40'},
]
}
