import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: 'example-subjects', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
