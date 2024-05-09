import { Component } from '@angular/core';
import { TimePeriod } from 'src/app/models/TimePeriod';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-timeperiod',
  templateUrl: './timeperiod.component.html',
  styleUrls: ['./timeperiod.component.css']
})
export class TimeperiodComponent {

  timePeriodList: TimePeriod [] = [];


ngOnInit(): void{
   
  this.getAll();

}

constructor(private service: GenericService<TimePeriod>) {
    
}

getAll(): void{
  this.service.getAll('TimePeriod').subscribe(data => {
      this.timePeriodList= data;
      console.log(data)
      console.log(this.timePeriodList); }//end getAll
 
 )};


}
