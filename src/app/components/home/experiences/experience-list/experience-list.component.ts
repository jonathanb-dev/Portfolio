import { Component, OnInit } from '@angular/core';

// Models
import { Experience } from 'src/app/models/experience';

// Constants
import { experiencesData } from 'src/app/constants/experiencesData';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = experiencesData;

  constructor() { }

  ngOnInit(): void {
  }
}
