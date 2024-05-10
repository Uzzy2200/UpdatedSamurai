import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Samurai } from 'src/app/models/Samurai';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-create-samurai',
  templateUrl: './create-samurai.component.html',
  styleUrls: ['./create-samurai.component.css']
})
export class CreateSamuraiComponent {
  public samuraiList: Samurai[] = [];
  samuraiVal?: Samurai;
  error: string = 'Name is required';
  public editForm: FormGroup;
  public isEditing: boolean = false;
  public editedSamurai: Samurai | null = null;

  samuraiForm: FormGroup = new FormGroup({
    samuraiName: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(''),
    
  });
  
  

  constructor(private service: GenericService<Samurai>,private formBuilder: FormBuilder) {
    
      this.samuraiForm = this.formBuilder.group({
        samuraiName: ['', Validators.required],
        description: [''],
        age: ['']
      });
  
      this.editForm = this.formBuilder.group({
        samuraiName: ['', Validators.required],
        description: [''],
        age: [''],
        weapon: [''],
        faction: [''],
        rank: [''],
        status: ['']
      });
    }
  

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.service.getAll('samurai').subscribe(data => {
      this.samuraiList = data;
    });
  }

  Create(): void {
    if (this.samuraiForm.valid) {
      this.service.create(this.samuraiForm.value, 'samurai')
        .subscribe({
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
    this.editForm.patchValue(samurai);
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editedSamurai = null;
    this.editForm.reset();
  }

  updateSamurai(): void {
    if (this.editForm.valid && this.editedSamurai) {
      const updatedSamurai: Samurai = { ...this.editedSamurai, ...this.editForm.value };
      this.service.update(updatedSamurai, 'samurai', updatedSamurai.samuraiId).subscribe(data => {
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
