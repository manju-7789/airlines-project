import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'airline',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'airline',
        component: AirlinesListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
