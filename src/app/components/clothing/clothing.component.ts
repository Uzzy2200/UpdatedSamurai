import { Component } from '@angular/core';
import { Clothing } from 'src/app/models/Clothing';
import { GenericService } from 'src/app/services/generic.service';


@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent {
  clothingList: Clothing [] = [];


  ngOnInit(): void{
  
    this.getAll();
 
 }
 
 constructor(private service: GenericService<Clothing>) {
     
 }
 
 getAll(): void{
  this.service.getAll('Clothing').subscribe(data => {
      this.clothingList= data;
      console.log(data)
      console.log(this.clothingList); }//end getAll
 
 
 
 )};
}