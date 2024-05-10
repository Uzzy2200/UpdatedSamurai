import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamuraiComponent } from './components/samurai/samurai.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeaponComponent } from './components/weapon/weapon.component';
import { ClanComponent } from './components/clan/clan.component';
import { ArmourComponent } from './components/armour/armour.component';
import { ClothingComponent } from './components/clothing/clothing.component';
import { HorseComponent } from './components/horse/horse.component';
import { TimeperiodComponent } from './components/timeperiod/timeperiod.component';
import { WarComponent } from './components/war/war.component';
import { RankComponent } from './components/rank/rank.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { CreateSamuraiComponent } from './components/create-samurai/create-samurai.component';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    SamuraiComponent,
    WeaponComponent,
    ClanComponent,
    ArmourComponent,
    ClothingComponent,
    HorseComponent,
    TimeperiodComponent,
    WarComponent,
    RankComponent,
    LoginComponent,
    FrontpageComponent,
    AdminPageComponent,
    CreateSamuraiComponent,
    HeaderComponent,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
