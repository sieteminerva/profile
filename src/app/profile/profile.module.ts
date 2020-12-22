import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routes';
import { ProfileComponent } from './profile.component';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './components/about/about.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AboutComponent,
    ExpertiseComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ComponentsModule
  ]
})
export class ProfileModule { }
