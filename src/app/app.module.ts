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

// Pages
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/shared/banner/banner.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { InformationsComponent } from './components/home/informations/informations.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { SkillListComponent } from './components/home/skills/skill-list/skill-list.component';
import { SkillComponent } from './components/home/skills/skill-list/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyLayoutComponent,
    LayoutComponent,
    NotFoundPageComponent,
    HomePageComponent,
    NotFoundComponent,
    HomeComponent,
    BannerComponent,
    AboutMeComponent,
    InformationsComponent,
    SkillsComponent,
    SkillListComponent,
    SkillComponent
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
