import { Component } from '@angular/core';
import { Rank } from 'src/app/models/Rank';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent {
  rankList: Rank [] = []; 

ngOnInit(): void {

  this.getAll();
  
}

constructor(private service: GenericService<Rank>) {
    
}

getAll(): void{
  this.service.getAll('Rank').subscribe(data => {
      this.rankList= data;
      console.log(data)
      console.log(this.rankList); }//end getAll
 
 
 
 )};
}
