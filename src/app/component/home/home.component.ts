import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(    private router: Router,) { }

  ngOnInit(): void {
  }
  onbookingClick()
  {
    this.router.navigate(['/booking-page']);
  }
}
