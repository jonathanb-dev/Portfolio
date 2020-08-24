import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom modules
import { AngularMaterialModule } from './angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Layouts
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { FooterComponent } from './layouts/footer/footer.component';

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { ExperiencesComponent } from './components/home/experiences/experiences.component';
import { ExperienceListComponent } from './components/home/experiences/experience-list/experience-list.component';
import { ExperienceComponent } from './components/home/experiences/experience-list/experience/experience.component';
import { InformationsComponent } from './components/home/informations/informations.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { SkillListComponent } from './components/home/skills/skill-list/skill-list.component';
import { SkillComponent } from './components/home/skills/skill-list/skill/skill.component';
import { LanguagesComponent } from './components/home/languages/languages.component';
import { LanguageListComponent } from './components/home/languages/language-list/language-list.component';
import { LanguageComponent } from './components/home/languages/language-list/language/language.component';
import { LatestProjectComponent } from './components/home/latest-project/latest-project.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyLayoutComponent,
    LayoutComponent,
    FooterComponent,
    NotFoundPageComponent,
    HomePageComponent,
    NotFoundComponent,
    HomeComponent,
    BannerComponent,
    AboutMeComponent,
    ExperiencesComponent,
    ExperienceListComponent,
    ExperienceComponent,
    InformationsComponent,
    SkillsComponent,
    SkillListComponent,
    SkillComponent,
    LanguagesComponent,
    LanguageListComponent,
    LanguageComponent,
    LatestProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
