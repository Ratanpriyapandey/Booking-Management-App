import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../model/model';
import { TodoService } from '../../services/data.services';
@Component({
  selector: 'app-booked-details',
  templateUrl: './booked-details.component.html',
  styleUrls: ['./booked-details.component.scss']
})
export class BookedDetailsComponent implements OnInit {

  public searchText: string;
  public bookingDetail: Todo[] = [];
  constructor( private router: Router, private myService: TodoService
  ) { }

  ngOnInit() {
    this.loadAllTodoList();    
}
  loadAllTodoList() {
    this.bookingDetail = this.myService.getAllTodos();
}

  onClickEditUserDetail(id) {

      this.router.navigate(['/booking-page'], {queryParams: {id: id}});
      //queryParams is observable
  }

  onClickAddUser() {
      this.router.navigate(['/booking-page']);
  }
 
  onClickTodoDelete(id) {
    this.myService.deleteTodoDetail(id);
}

}
