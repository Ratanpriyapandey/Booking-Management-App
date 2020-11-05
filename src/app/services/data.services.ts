import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../model/model';

@Injectable()
export class TodoService {
    private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

    servicevalue: string;
    public todos: Todo[] = [];
    constructor() { 
        this.servicevalue="hello i am in service";
    }
    changeMessage(message: string) {
        this.messageSource.next(message)
      }
    private display: BehaviorSubject<'open' | 'close'> = 
                     new BehaviorSubject('close');
  
    watch(): Observable<'open' | 'close'> {
      return this.display.asObservable();
    }
    open() {
        
        this.display.next('open');
        this.getTodoById;
      }
    
      close() {
        this.display.next('close');
      }
    getAllTodos(): Todo[] {

        if(localStorage.getItem('localData') !== null){ 
            this.todos = JSON.parse(localStorage.getItem('localData'));
        } else {
            var todoArrayData = [
                {
                    id: 1,
                    name:  'Ratan',
                    district: 'City district 1' ,
                    city:'Altstadt',
                    center: 'Center 2' ,
                    date: '2 November 2020' ,
                    coupleTime: 15 ,
                    aptTime: '07:00 AM--07:15 AM' ,
                    address: 'Dusseldorf'
                },
                {
                    id: 2,
                    name:  'Shiven',
                    district: 'City district 2' ,
                    city:'Altstadt',
                    center: 'Center 1' ,
                    date: '2 November 2020' ,
                    coupleTime: 15  ,
                    aptTime: '07:15 AM--07:30 AM' ,
                    address: 'Dusseldorf'
                }
                
            ];
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData'));
        }       
        return this.todos;
    }
    
    getTodoById(id: number): Todo {
        var todoArray = JSON.parse(localStorage.getItem('localData'));       
        return todoArray
          .filter(todo => todo.id === id)
          .pop();
    }
  
    updateTodoById(todo): Todo {
            var todoArray = JSON.parse(localStorage.getItem('localData'));
            var todoid = todoArray.length;
                todo.id = ++todoid;
                todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        return todo;
    }
    
    deleteTodoDetail(id) {
       var todoArray = JSON.parse(localStorage.getItem('localData'));
        for (var i in todoArray) {
            if (todoArray[i].id === id) {
                todoArray.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(todoArray));  
            }
        }    
    };    
}