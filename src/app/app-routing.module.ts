import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { BodyComponent } from "./components/body/body.component";
import { MagazineComponent } from './components/magazine/magazine.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path: 'main', component: MainComponent},
{ path: 'components', children: 
[
  { path: 'products', component: ProductsComponent },
  { path: 'body', component: BodyComponent},
  { path: 'magazine', component: MagazineComponent},
  { path: 'contact', component: ContactComponent}

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

