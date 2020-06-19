import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  // {
  //   path: 'notes',
  //   component: NotesListComponent,
  //   canActivate: [AuthGuard]
  // },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
