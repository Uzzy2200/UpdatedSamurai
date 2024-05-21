// create-samurai.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';
import { Weapon } from 'src/app/models/Weapon';
import { Clan } from 'src/app/models/Clan';
import { Horse } from 'src/app/models/Horse';
import { Armour } from 'src/app/models/Armour';

@Component({
  selector: 'app-create-samurai',
  templateUrl: './create-samurai.component.html',
  styleUrls: ['./create-samurai.component.css']
})
export class CreateSamuraiComponent implements OnInit {
  public samuraiList: Samurai[] = [];
  public weapons: Weapon[] = [];
  public clans: Clan[] = [];
  public horses: Horse[] = [];
  public armours: Armour[] = [];
  public samuraiForm: FormGroup;
  public editForm: FormGroup;
  public isEditing: boolean = false;
  public editedSamurai: Samurai | null = null;
  error: string = 'Name is required';

  constructor(
    private service: GenericService<Samurai>,
    private weaponService: GenericService<Weapon>,
    private clanService: GenericService<Clan>,
    private armourService: GenericService<Armour>,
    private horseService: GenericService<Horse>,
    private formBuilder: FormBuilder
  ) {
    this.samuraiForm = this.formBuilder.group({
      samuraiName: ['', Validators.required],
      description: [''],
      age: [''],
      weapon: [''],
      clan: [''],
      horse: [''],
      armour: ['']
    });

    this.editForm = this.formBuilder.group({
      samuraiName: ['', Validators.required],
      description: [''],
      age: [''],
      weaponId: [''],
      clanId: [''],
      horseId: [''],
      armourId: ['']
    });
  }

  ngOnInit(): void {
    this.getAll();
    this.getWeapons();
    this.getClans();
    this.getHorses();
    this.getArmours();
  }

  public getAll(): void {
    this.service.getAll('samurai').subscribe(data => {
      this.samuraiList = data;
    });
  }

  public getWeapons(): void {
    this.weaponService.getAll('weapon').subscribe(data => {
      this.weapons = data;
    });
  }

  public getClans(): void {
    this.clanService.getAll('clan').subscribe(data => {
      this.clans = data;
    });
  }

  public getArmours(): void {
    this.armourService.getAll('armour').subscribe(data => {
      this.armours = data;
    });
  }

  public getHorses(): void {
    this.horseService.getAll('horse').subscribe(data => {
      this.horses = data;
    });
  }

  Create(): void {
    if (this.samuraiForm.valid) {
      const formValues = this.samuraiForm.value;

      // Create a samurai with selected objects
      const samuraiData: Samurai = {
        samuraiName: formValues.samuraiName,
        description: formValues.description,
        age: formValues.age,
        weapon: this.weapons.find(w => w.weaponId === formValues.weaponId),
        clan: this.clans.find(c => c.clanId === formValues.clanId),
        horse: this.horses.find(h => h.id === formValues.horseId),
        // armour: this.armours.find(a => a.id === formValues.armourId)
      };

      this.service.create(samuraiData, 'samurai').subscribe({
        next: (data) => {
          this.samuraiList.push(data);
          this.samuraiForm.reset();
        },
        error: (error) => {
          console.error('Error creating samurai:', error);
        }
      });
    } else {
      console.log('Form is invalid. Cannot create samurai.');
    }
  }

  deleteSamurai(samuraiId: number | undefined): void {
    if (samuraiId !== undefined) {
      this.service.delete('samurai', samuraiId).subscribe(result => {
        if (result) {
          console.log(`Samurai with ID ${samuraiId} deleted successfully.`);
          this.getAll();
        } else {
          console.error(`Failed to delete Samurai with ID ${samuraiId}.`);
        }
      });
    } else {
      console.error('Cannot delete. Samurai ID is undefined.');
    }
  }

  editSamurai(samurai: Samurai): void {
    this.isEditing = true;
    this.editedSamurai = samurai;
    this.editForm.patchValue({
      ...samurai,
      weaponId: samurai.weapon?.weaponId,
      clanId: samurai.clan?.clanId,
      horseId: samurai.horse?.id,
      // armourId: samurai.armour?.id
    });
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedSamurai = null;
    this.editForm.reset();
  }

  updateSamurai(): void {
    if (this.editForm.valid && this.editedSamurai) {
      const formValues = this.editForm.value;

      const updatedSamurai: Samurai = {
        ...this.editedSamurai,
        samuraiName: formValues.samuraiName,
        description: formValues.description,
        age: formValues.age,
        weapon: this.weapons.find(w => w.weaponId === formValues.weaponId),
        clan: this.clans.find(c => c.clanId === formValues.clanId),
        horse: this.horses.find(h => h.id === formValues.horseId),
        // armour: this.armours.find(a => a.id === formValues.armourId)
      };

      this.service.update(updatedSamurai, 'samurai', updatedSamurai.samuraiId!).subscribe(data => {
        console.log('Samurai updated successfully:', data);
        this.getAll();
        this.cancelEdit();
      }, error => {
        console.error('Error updating samurai:', error);
      });
    } else {
      console.error('Form is invalid or edited samurai is null.');
    }
  }
}
