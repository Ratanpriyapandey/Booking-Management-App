import { Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TodoService} from '../../services/data.services';
import {Todo} from '../../model/model';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { mutableValue ,city,district2,center,avlSlot, setavlSlot} from 'src/app/services/global';
import {Location} from '@angular/common';
export let HNP1 = "center";
export function setHNP1(k) {
  HNP1 = k;
}
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})



export class DialogueComponent implements OnInit {

  display$: Observable<'open' | 'close'>;
  public todoId: string;
  public todoDetail = <Todo>{};
  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private modalService: TodoService) { }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.todoId = params['id'];
       this.todoId = null;
            this.todoDetail['id'] = 0; 
    }); 
    this.display$ = this.modalService.watch();
    this.todoDetail.district = district2;
  }

  
  setradio(event){
    this.todoDetail.date = mutableValue;
    if(event=="Single"){
     
      var endTime = moment(avlSlot, 'HH:mm A').add(15, 'minutes').format('HH:mm A');
      this.todoDetail.aptTime = avlSlot + "--" + endTime;
      this.todoDetail.coupleTime = 15;
    }
    else { 
           var endTime = moment(avlSlot, 'HH:mm A').add(20 , 'minutes').format('HH:mm A');
           this.todoDetail.aptTime = avlSlot + "--" + endTime;
           this.todoDetail.coupleTime = 20;
         }
  }
  close() {
    
    this.todoDetail.name="";
    this.todoDetail.street="";
    this.todoDetail.Hno="";
    this.todoDetail.aptTime=""; 
    this.todoDetail.date=""; 
    parent.location.reload();
    this.router.navigate(['/booking-page']);
    this.modalService.close(); 
  }
  getTodoDetailById(id) {
    this.todoDetail = this.modalService.getTodoById(parseInt(id)); 
  }

  onTodoSubmitForm(form) {
   
    if(form.valid) {
  
      var searchId=mutableValue;
      this.todoDetail.date = mutableValue;
      
      this.todoDetail.district = district2;
      this.todoDetail.city = city;
      this.todoDetail.center = center;
      setavlSlot(parseInt(avlSlot) + this.todoDetail.coupleTime)
      this.modalService.updateTodoById(this.todoDetail);
      this.close();
   
     
    } 
    
  }

  
}