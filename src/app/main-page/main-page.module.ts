import { AboutComponent } from './components/about/about.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [CommonModule, MainPageRoutingModule],
})
export class MainPageModule {}
