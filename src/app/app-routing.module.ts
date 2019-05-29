import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { BodyComponent } from "./components/body/body.component";
import { ContactComponent } from './components/contact/contact.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
{ path: '', component: MainComponent},
{ path: 'components', children: 
[
  { path: 'products', component: ProductsComponent },
  { path: 'body', component: BodyComponent},
  { path: 'contact', component: ContactComponent}

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

