import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module')
    .then(m => m.DashboardModule), data: { animation: 'FilterPage' }
  },
  {
    path: 'profile', loadChildren: () => import('./profile/profile.module')
      .then(m => m.ProfileModule), data: { animation: 'FilterPage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
