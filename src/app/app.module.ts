import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { BodyComponent } from "./components/body/body.component";
import { ProductsComponent } from './components/products/products.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    BodyComponent,
    ProductsComponent,
    MainComponent,
    FooterComponent

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
