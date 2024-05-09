import { Component } from '@angular/core';
import { War } from 'src/app/models/War';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-war',
  templateUrl: './war.component.html',
  styleUrls: ['./war.component.css']
})
export class WarComponent {
warList: War [] = []; 

ngOnInit(): void{
  
  this.getAll();

}

constructor(private service: GenericService<War>) {
   
}

getAll(): void{
this.service.getAll('samurai').subscribe(data => {
    this.warList= data;
    console.log(data)
    console.log(this.warList); }//end getAll



)};

}