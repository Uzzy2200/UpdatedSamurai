import { Component } from '@angular/core';
import { Samurai } from 'src/app/models/Samurai';
import { CreateSamuraiComponent } from '../create-samurai/create-samurai.component';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  samuraiVisible: boolean = false;
  clanVisible: boolean = false;
  weaponVisible: boolean = false;
  armourVisible: boolean = false;
  warVisible: boolean = false;
  horsesVisible: boolean = false;


  toggleVisibility(section: string) {
    switch (section) {
      case 'samurai':
        this.samuraiVisible = !this.samuraiVisible;
        break;
      case 'clan':
        this.clanVisible = !this.clanVisible;
        break;
      case 'weapon':
        this.weaponVisible = !this.weaponVisible;
        break;
      case 'armour':
        this.armourVisible = !this.armourVisible;
        break;
      case 'war':
        this.warVisible = !this.warVisible;
        break;
      case 'horses':
        this.horsesVisible = !this.horsesVisible;
        break;
      default:
        break;
    }
  }
}
