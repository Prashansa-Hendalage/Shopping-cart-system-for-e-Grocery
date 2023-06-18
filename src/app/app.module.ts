import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { UserProductComponent } from './user/user-product/user-product.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    UserHomeComponent,
    UserFooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
