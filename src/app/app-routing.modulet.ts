import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { OnlineOrderComponent } from "./online-order/online-order.component";
import { ShopComponent } from "./shop/shop.component";

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'contact',component:ContactComponent},
{path:'shop',component:ShopComponent},
{path:'online',component:OnlineOrderComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
