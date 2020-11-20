import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GraphsComponent } from './graphs/graphs.component';
import { MaterialComponent } from './material/material.component';
import { AuthComponent } from './auth/auth.component';
import { AgGridModule } from 'ag-grid-angular';
import { MapChartComponent } from './map-chart/map-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    GraphsComponent,
    MaterialComponent,
    AuthComponent,
    MapChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
