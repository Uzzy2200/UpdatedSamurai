import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamuraiComponent } from './components/samurai/samurai.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { Armour } from './models/Armour';
import { Clan } from './models/Clan';
import { Clothing } from './models/Clothing';
import { Horse } from './models/Horse';
import { Rank } from './models/Rank';
import { War } from './models/War';
import { Weapon } from './models/Weapon';
import { ArmourComponent } from './components/armour/armour.component';
import { ClanComponent } from './components/clan/clan.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { HorseComponent } from './components/horse/horse.component';
import { RankComponent } from './components/rank/rank.component';
import { WarComponent } from './components/war/war.component';
import { WeaponComponent } from './components/weapon/weapon.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' }, // Default route
  {path:'login', component: LoginComponent},
  {path: 'frontpage', component: FrontpageComponent },
  {path: 'samurai', component: SamuraiComponent },
  {path: 'armour', component: ArmourComponent },
  {path: 'clan', component: ClanComponent },
  {path: 'clothing', component: ClothingComponent },
  {path: 'horse', component: HorseComponent },
  {path: 'rank', component: RankComponent },
  {path: 'war', component: WarComponent },
  {path: 'weapon', component: WeaponComponent },
  {path: 'admin-page', component: AdminPageComponent}

  // Define other routes as needed
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
