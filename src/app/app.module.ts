import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BookingPageComponent } from '././component/booking-page/booking-page.component';
import { HeaderComponent } from '././component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogueComponent } from './dialogue/dialogue/dialogue.component';

import { BookedDetailsComponent } from './component/booking-details/booked-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingPageComponent,
    HeaderComponent,
    DialogueComponent,
    BookedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DialogueComponent ]
})
export class AppModule { }
