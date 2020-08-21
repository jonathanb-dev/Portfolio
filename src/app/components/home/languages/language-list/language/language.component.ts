import { Component, OnInit, Input } from '@angular/core';

// Models
import { Language } from 'src/app/models/language';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  @Input() language: Language;

  constructor() { }

  ngOnInit(): void {
  }
}
