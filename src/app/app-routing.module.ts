import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { UserProductComponent } from './user/user-product/user-product.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';

const routes: Routes = [
  {path:'',component:UserHomeComponent},
  {path:'About',component:AboutUsComponent},
  {path:'Product',component:UserProductComponent},
  {path:'ContactUs',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
