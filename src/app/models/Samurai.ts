// samurai.model.ts
import { Clan } from "./Clan";
import { Armour } from "./Armour";
import { Horse } from "./Horse";
import { Weapon } from "./Weapon";

export class Samurai {
    samuraiId?: number = 0;
    samuraiName?: string = "";
    description?: string = "";
    age?: number = 0;
    clan?: Clan;
    // armour?: Armour; 
    horse?: Horse; 
    weapon?: Weapon;
     
}
