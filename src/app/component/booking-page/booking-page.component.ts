import { Component, OnInit } from "@angular/core";
import { FormBuilder,  FormGroup } from "@angular/forms";
import * as moment from 'moment';
import { TodoService } from '../../services/data.services';
import { Todo } from '../../model/model';
import { ActivatedRoute, Router } from '@angular/router';
import { incMutableValue ,city,setcity,district2,setdistrict,center,setcenter,avlSlot,setavlSlot } from 'src/app/services/global';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})

export class BookingPageComponent implements OnInit {
  data = 0
  bookingId: any;
  public bookingDetail: Todo[] = [];
  jsonArrayObject = [];
  fetchData =[];
  fetchWeek=[];
  month1 = 0;
  month2 = 0;
  month3 = 0;
  sampleForm: FormGroup;
  last3Months = []
  selectedMonth = [];
  renderer: any;
  arrayofmy: [];
  district_id: any;
  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private todoService: TodoService,
    private activatedRoute: ActivatedRoute) {
      this.sampleForm = this._fb.group({
        district_id: [this.surveyCategoryList[0], null],
        city_id: [1, null],
        month_id:[1],
        center_id:[''],
      });
      this.validateForm();
      this.sampleForm.controls['district_id'].setValue("City district 1", {onlySelf: true});
      this.sampleForm.controls['city_id'].setValue("Altstadt");
      this.sampleForm.controls['center_id'].setValue("Center 1");
  }

  ngOnInit(): void {

    this.loadAllTodoList(); 
    this.getLastMonths();
    this.Onchange();
  }


  loadAllTodoList() {
    this.bookingDetail = this.todoService.getAllTodos();
}

  open(title) {
    if((<HTMLInputElement>document.getElementById('city_id')).value == "") 
    {
      alert("Please select City");
      return;
    }
    incMutableValue(title.date); 
    setavlSlot(title.nxtSlot) 
    if(title.status == "Active")  {
      this.todoService.open();
      this.sampleForm.value;
     
     }
      this.bookingDetail.push(
      this.sampleForm.controls['district_id'].value,
      this.sampleForm.controls['city_id'].value,
      this.sampleForm.controls['center_id'].value
    )
    
    this.ngOnInit();
  }

  setglobalvalue() {
    setdistrict(this.sampleForm.controls['district_id'].value);  
    setcity(this.sampleForm.controls['city_id'].value);  
    setcenter(this.sampleForm.controls['center_id'].value);
   
  }

  getLastMonths() { 

    var today = new Date();
    var month1 = moment.utc(today).format("MMMM YYYY");
    var ll = moment(today).add(1, 'month').calendar();
    var month2 = moment.utc(ll).format("MMMM YYYY");
    var ll = moment(today).add(2, 'month').calendar();
    var month3 = moment.utc(ll).format("MMMM YYYY");
    this.selectedMonth = [
      { value: month1, viewValue: month1 },
      { value: month2, viewValue: month2 },
      { value: month3 ,viewValue: month3 }
    ];

  };


  surveyCategoryList = [
    { _id: 'City district 1', district: 'City district 1' },
    { _id: 'City district 2', district: 'City district 2' },
    { _id: 'City district 3', district: 'City district 3' },
    { _id: 'City district 4', district: 'City district 4' },
    { _id: 'City district 5', district: 'City district 5' },
    { _id: 'City district 6', district: 'City district 6' },
    { _id: 'City district 7', district: 'City district 7' },
    { _id: 'City district 8', district: 'City district 8' },
    { _id: 'City district 9',  district: 'City district 9' },
    { _id: 'City district 10', district: 'City district 10' }];
  CityList = [];  
  center=[];
  validateForm() {
    

    this.sampleForm.controls["district_id"].valueChanges.subscribe(value => {
      this.center =[{_id: "1" , centername: "Center 1"},
                    {_id: "2" , centername: "Center 2"}],
      setTimeout(() => {
        switch (value) {
          case "City district 1":
            this.CityList = [
              { id: "Altstadt",   City: "Altstadt" },
              { id: "Carlstadt",  City: "Carlstadt" },
              { id: "Stadtmitte", City: "Stadtmitte" },
              { id: "Pempelfort", City: "Pempelfort" },
              { id: "Derendorf",  City: "Derendorf" },
              { id: "Golzheim",   City: "Golzheim" }

            ];
            break;
          case "City district 2":
            this.CityList = [

              { id: "Flingern-Nord", City: "Flingern-Nord" },
              { id: "Flingern-Süd",  City: "Flingern-Süd" },
              { id: "Düsseltal",     City: "Düsseltal" }
            ];
            break;
          case "City district 3":
            this.CityList = [
              { id: "Oberbilk",       City: "Oberbilk" },
              { id: "Unterbilk",      City: "Unterbilk" },
              { id:  "Bilk",          City: "Bilk" },
              { id: "Friedrichstadt", City: "Friedrichstadt" },
              { id: "Hafen",          City: "Hafen" },
              { id: "Hamm",           City: "Hamm" },
              { id: "Flehe",          City: "Flehe" },
              { id: "Volmerswerth",   City: "Volmerswerth" },
            ];
            break;
          case "City district 4":
            this.CityList = [
              { id: "Oberkassel", City: "Oberkassel" },
              { id: "Heerdt", City: "Heerdt" },
              { id: "Lörick", City: "Lörick" },
              { id: "Niederkassel", City: "Niederkassel" }
            ];
            break;
          case "5":
            this.CityList = [
              { id: "Stockum", City: "Stockum" },
              { id: "Lohausen" , City: "Lohausen" },
              { id: "Kaiserswerth", City: "Kaiserswerth" },
              { id: "Wittlaer", City: "Wittlaer" },
              { id: "Kalkum", City: "Kalkum" },
              { id: "Angermund", City: "Angermund" }
            ];
            break;
          case "6":
            this.CityList = [
              { id: "Lichtenbroich", City: "Lichtenbroich" },
              { id: "Unterrath", City: "Unterrath" },
              { id: "Rath" , City: "Rath" },
              { id: "Mörsenbroich", City: "Mörsenbroich" }

            ];
            break;
          case "City district 7":
            this.CityList = [
              { id: "Gerresheim", City: "Gerresheim" },
              { id: "Grafenberg", City: "Grafenberg" },
              { id: "Ludenberg", City: "Ludenberg" },
              { id: "Hubbelrath", City: "Hubbelrath" },
              { id: "Knittkuhl" , City: "Knittkuhl" }
            ];
            break;
          case "City district 8":
            this.CityList = [
              { id: "Eller" , City: "Eller" },
              { id: "Lierenfeld", City: "Lierenfeld" },
              { id: "Vennhausen", City: "Vennhausen" },
              { id: "Unterbach", City: "Unterbach" }
            ];
            break;
          case "City district 9":
            this.CityList = [
              { id: "Wersten", City: "Wersten" },
              { id: "Holthausen", City: "Holthausen" },
              { id: "Reisholz", City: "Reisholz" },
              { id: "Benrath", City: "Benrath" },
              { id: "Urdenbach", City: "Urdenbach" },
              { id: "Hassels", City: "Hassels" },
              { id: "Itter", City: "Itter" },
              { id: "Himmelgeist", City: "Himmelgeist" }
            ];
            break;
          case "City district 10":
            this.CityList = [
              { id: "Garath", City: "Garath" },
              { id: "Hellerhof", City: "Hellerhof" }
            ];
            break;
        }
      }, 10);
    });
  }
  Onchange(){
    
    this.setglobalvalue();
    
    this.setCalender();
 
  }
  setCalender() {
    
    const startTime = '07:00:00';
    this.loadAllTodoList(); 
    this.fetchData.splice(0,50);
    this.fetchWeek.splice(0,10);
    var slctdM = (<HTMLInputElement>document.getElementById('month_id')).value;
    var days = moment(slctdM, "MMMM YYYY").daysInMonth();
    var month = moment(slctdM, "MMMM YYYY").month();
    this.fetchWeek.push({"id":"Mon"},{"id":"Tue"},{"id":"Wed"},{"id":"Thur"},{"id":"Fri"},{"id":"Sat"},{"id":"Sun"});  
    var dayTime = 0;
    var status = "Active";
    var varclass = "progress";
    var today = moment(new Date()).format("YYYY-MM-DD");
   
    if(isNaN(days)) {
      slctdM = moment.utc(new Date()).format("MMMM YYYY");
      days = moment(slctdM, "MMMM YYYY").daysInMonth();
    }

    for(let i = 1; i <= days ; i++)
    { 
      
      var searchId = i + " " + slctdM;
      var dt = moment(searchId, "DDMMMM YYYY");
      var day = dt.format('d');
      if(day == "0"){day="7";}
      var loopday = moment(dt).format("YYYY-MM-DD");
      
      status = "Active";
    
      

      if ( i === 1 )
      { 
       
        for(let k = 1; k < parseInt(day) ; k++)
        {  this.fetchData.push({"id":"","status":"Blank","percent1":"","date":"",class:""});   }
        
      
      }  
      dayTime = 0;
      
      for (var j in this.bookingDetail) {
        if (this.bookingDetail[j].date === searchId) { 
          if ((this.bookingDetail[j].district === district2) && (this.bookingDetail[j].city === city) && (this.bookingDetail[j].center === center) ) 
           { dayTime = (this.bookingDetail[j].coupleTime) + dayTime; }
        }
      }
     

      var endTime = moment(startTime, 'HH:mm:ss').add(dayTime, 'minutes').format('HH:mm A');
      dayTime = (dayTime/660) * 100;      
     
      if (dayTime > 0) {this.bookingDetail[j].coupleTime}
      if (dayTime > 98 ) {status = "Deactive";}
      else {status="Active";}
      if ( (parseInt(day) === 7) || (parseInt(day) === 6) ) {status = "grey";varclass="";}
      else {status = "Active";varclass="progress"}
      if ( today > loopday ){status = "grey";}
      this.fetchData.push({"id":i,"status":status,"percent1":dayTime,"date":searchId,class:varclass,"nxtSlot":endTime});  
    }
  }

}
