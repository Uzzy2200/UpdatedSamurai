import { Clan } from "./Clan";
import { Rank } from "./Rank";
import { War } from "./War";
import { Armour } from "./Armour";
import { Horse } from "./Horse";
import { Clothing } from "./Clothing";
import { Weapon } from "./Weapon";
export class Samurai {
    id?: number = 0;
    samuraiName?: string = "";
    description?: string = "";
    age?: number = 0;
    clan?: Clan; // Representing the Clan relationship
    rank?: Rank; // Representing the Rank relationship
    war?: War[]; // Representing the Wars relationship
    armour?: Armour[]; // Representing the Armour relationship
    clothing?: Clothing[]; // Representing the Clothing relationship
    horse?: Horse[]; // Representing the Horse relationship
    weapon?: Weapon[]; // Representing the Weapon relationship
}
