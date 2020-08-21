import { Component, OnInit } from '@angular/core';

// Models
import { Skill } from 'src/app/models/skill';

// Constants
import { skillsData } from 'src/app/constants/skillsData';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills: Skill[] = skillsData;

  constructor() { }

  ngOnInit(): void {
  }
}
