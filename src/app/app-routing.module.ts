import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardGridComponent } from './card-grid/card-grid.component';


const routes: Routes = [
  { path: 'rickandmorty', component: CardGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
