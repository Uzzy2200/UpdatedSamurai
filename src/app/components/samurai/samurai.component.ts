
import { Component, Sanitizer } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';
import { Clan } from 'src/app/models/Clan';
import { Weapon } from 'src/app/models/Weapon';
@Component({
  selector: 'app-samurai',
  templateUrl: './samurai.component.html',
  styleUrls: ['./samurai.component.css']
})
export class SamuraiComponent {
samuraiList: Samurai [] = [];
samurai: Samurai= {};




ngOnInit(): void{

   this.getAll();

}

constructor(private service: GenericService<Samurai>) {

}

getAll(): void{
 this.service.getAll('samurai').subscribe(data => {
     this.samuraiList= data;
     console.log(data)
     console.log(this.samuraiList); }

)};


}