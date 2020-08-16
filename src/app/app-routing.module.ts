import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MaterialComponent } from './material/material.component'
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: HomeComponent}, // default
  { path: 'home', component: HomeComponent}, // default
  { path: 'list', component: ListComponent},
  { path: 'graphs', component: GraphsComponent },
  { path: 'material', component: MaterialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
