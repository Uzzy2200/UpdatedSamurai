import { Component } from '@angular/core';
import { Armour } from 'src/app//models/Armour';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-armour',
  templateUrl: './armour.component.html',
  styleUrls: ['./armour.component.css']
})
export class ArmourComponent {
  armourList: Armour [] =[];
  url:string ="./assets/img/kabuto.jpg";
  urlAdvanced:string="./assets/"+"image2"+".jpg"
  ngOnInit(): void{
  
    this.getAll();
 
 }
 
 constructor(private service: GenericService<Armour>) {
     
 }
 
 getAll(): void{
  this.service.getAll('Armour').subscribe(data => {
      this.armourList= data;
      console.log(data)
      console.log(this.armourList); }//end getAll
 
 
 
 )};
 

}