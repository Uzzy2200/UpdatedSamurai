import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  samuraiForm: FormGroup = new FormGroup({
    samuraiName: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl(''),
  });

  constructor(private service: GenericService<Samurai>) {}

  ngOnInit(): void {
    this.getAll();
  }
  

  public getAll(): void {
    this.service.getAll('samurai').subscribe(data => {
      this.samuraiList = data;
      console.log(data);
      console.log(this.samuraiList);
    });
    
  }
  Create(): void {
    if (this.samuraiForm.valid) {
      console.log('Form value:', this.samuraiForm.value);
  
      this.service.create(this.samuraiForm.value, 'samurai')
        .subscribe({
          next: (data) => {
            console.log('Create successful:', data);
            // Add the newly created samurai to the list
            this.samuraiList.push(data);
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

    updateSamurai(){
      
    }
}
