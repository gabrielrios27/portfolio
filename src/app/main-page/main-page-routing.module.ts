import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  {
    path: 'main-page',
    component: MainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
