import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AuthComponent } from './auth/auth.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: HomeComponent}, // default
  { path: 'home', component: HomeComponent}, // default
  { path: 'list', component: ListComponent},
  { path: 'graphs', component: GraphsComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'map', component: MapChartComponent},
  { path: 'pdf', component: PdfViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
