import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AboutComponent } from './components/about/about.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';


const children: Routes = [
  {
    path: '',
    redirectTo: 'about'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { state: 0 }
  },
  {
    path: 'expertise',
    component: ExpertiseComponent,
    data: { state: 1 }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { state: 2 }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { state: 3 }
  }
];
const routes: Routes = [{
  path: '',
  component: ProfileComponent,
  children
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
