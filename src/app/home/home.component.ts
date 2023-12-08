import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  order:any=[
    {title:'Smoked Brisket',text1:'Pulled Pork,Beer bariset',text2:'Brisket & Quater',price:'40',src:'../assets/home/burger1.png'},
    {title:'Buffallo Ranch',text1:'Pulled Pork,Beer bariset',text2:'Brisket & Quater',price:'40',src:'../assets/home/burger1.png'},
    {title:'BBQ Burger',text1:'Pulled Pork,Beer bariset',text2:'Brisket & Quater',price:'30',src:'../assets/home/burger1.png'},
    {title:'Big Hottie',text1:'Pulled Pork,Beer bariset',text2:'Brisket & Quater',price:'40',src:'../assets/home/burger1.png'},
  ]
  menu_item:any=[
    {top:'Recommended',title:'Smoked Brisket Sandwich',price:'39',flag:'true'},
    {top:'Recommended',title:'Pulled Chicken Sandwich',price:'12',flag:'true'},
    {title:'Ocean Spary Cranbery Juise',price:'39',flag:'false'},
    {title:'Canada Cry Ginger Ale',price:'39',flag:'false'},
    {top:'New',title:'6 Piece Mozzarella Sticks',price:'10',flag:'true'},
    {title:`Martinelli's Apple juice`,price:'11',flag:'false'},
    {title:'Penaunty Blast Smoothy',price:'11',flag:'false'},
    {top:'new',title:'Mango Maniya Smoothy',price:'12',flag:'true'},
  ]
  news_card:any=[
    {path:'../assets/home/gal/burger3.jpeg',title:'Labor Depar Rules'},
    {path:'../assets/home/custom2.jpg',title:'New Resturant town'},
    {path:'../assets/home/gal/burger5.jpeg',title:'StarBucks Invests $100M'}
  ]

}
