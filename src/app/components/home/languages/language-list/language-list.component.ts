import { Component, OnInit } from '@angular/core';

// Models
import { Language } from 'src/app/models/language';

// Constants
import { languagesData } from 'src/app/constants/languagesData';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss']
})
export class LanguageListComponent implements OnInit {
  languages: Language[] = languagesData;

  constructor() { }

  ngOnInit(): void {
  }
}
