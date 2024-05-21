import { Component, OnInit } from '@angular/core';
import { Horse } from 'src/app/models/Horse';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-horse',
  templateUrl: './horse.component.html',
  styleUrls: ['./horse.component.css']
})
export class HorseComponent implements OnInit {
  horseList: Horse[] = [];

  constructor(private service: GenericService<Horse>) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll('Horse').subscribe(data => {
      this.horseList = data.map(horse => ({
        ...horse,
        imageUrl: this.getImageUrlForHorse(horse.horseName)
      }));
      console.log(data);
      console.log(this.horseList);
    });
  }

  getImageUrlForHorse(horseName: string): string {
    // Construct the image URL based on the horse name
    const imageUrl = `assets/img/${horseName.replace(/\s+/g, '').toLowerCase()}.jpg`;
    console.log(`Image URL for ${horseName}: ${imageUrl}`);
    return imageUrl;
  }
}
