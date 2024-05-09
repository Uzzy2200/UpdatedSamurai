import { Component } from '@angular/core';
import { Clan } from 'src/app//models/Clan';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent {

  clanList: Clan [] =[];

  ngOnInit(): void{
  
    this.getAll();
 
 }
 
 constructor(private service: GenericService<Clan>) {
     
 }
 
 getAll(): void{
  this.service.getAll('Clan').subscribe(data => {
      this.clanList= data;
      console.log(data)
      console.log(this.clanList); }//end getAll
 
 
 )};

}