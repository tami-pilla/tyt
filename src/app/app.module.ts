import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkWUsComponent } from './components/work-w-us/work-w-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';

import { RouterModule, Routes } from '@angular/router';
import { MakeOrderComponent } from './components/make-order/make-order.component';
import { ModalContactComponent } from './components/modal-contact/modal-contact.component';
import { ModalWorkComponent } from './components/modal-work/modal-work.component';
import { ContactNavComponent } from './components/contact-nav/contact-nav.component';
import { WorkWUsNavComponent } from './components/work-w-us-nav/work-w-us-nav.component';

const appRoutes: Routes = [
  {path:'home', component:HeaderComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'services', component:ServicesComponent},
  {path:'make-order', component:MakeOrderComponent},
  {path:'contact', component:ContactNavComponent},
  {path:'work-with-us', component:WorkWUsNavComponent},
  

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HowItWorksComponent,
    CustomersComponent,
    ContactComponent,
    WorkWUsComponent,
    FooterComponent,
    ServicesComponent,
    MakeOrderComponent,
    ModalContactComponent,
    ModalWorkComponent,
    ContactNavComponent,
    WorkWUsNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
