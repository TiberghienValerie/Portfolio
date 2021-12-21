import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SplitPipe } from './split.pipe';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    AboutComponent,
    SplitPipe,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }