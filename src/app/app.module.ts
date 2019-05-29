import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { MagazineComponent } from './components/magazine/magazine.component';
import { BodyComponent } from "./components/body/body.component";
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MagazineComponent,
    BodyComponent,
    ProductsComponent,
    MainComponent,
    FooterComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
