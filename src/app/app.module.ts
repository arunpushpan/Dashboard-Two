import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WidgetChartComponent } from './widget-chart/widget-chart.component';
import { WidgetPieComponent } from './widget-pie/widget-pie.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { HighchartsChartModule } from 'highcharts-angular';
import { WidgetPieTwoComponent } from './widget-pie-two/widget-pie-two.component';
import { WidgetGaugeComponent } from './widget-gauge/widget-gauge.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { WidgetRightComponent } from './widget-right/widget-right.component';
import { EulerDiagramComponent } from './euler-diagram/euler-diagram.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    WidgetChartComponent,
    WidgetPieComponent,
    DashboardComponent,
    WidgetPieTwoComponent,
    WidgetGaugeComponent,
    ProgressBarComponent,
    WidgetRightComponent,
    EulerDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatBadgeModule,
    HighchartsChartModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
