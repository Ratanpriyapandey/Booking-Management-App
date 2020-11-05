import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{BookingPageComponent} from './component/booking-page/booking-page.component'
import {HomeComponent} from './component/home/home.component'
import { DialogueComponent } from './dialogue/dialogue/dialogue.component';
import {HttpClientModule} from '@angular/common/http';
import { TodoService } from './services/data.services';
import { BookedDetailsComponent } from './component/booking-details/booked-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking-page', component: BookingPageComponent },
  {path:'booking-details', component:BookedDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HttpClientModule,TodoService],
})
export class AppRoutingModule { }
