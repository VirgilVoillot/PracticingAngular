import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SidenavComponenent } from 'src/app/BaseFrame/SideNav/sidenav.component';

import { HomeComponent } from 'src/app/Sections/Home/home.component';
import { MeteoComponent } from './Sections/Meteo/meteo.component';
import { NotFoundComponent } from 'src/app/Sections/NotFound/notFound.component';

import { ConfigService } from 'src/app/Services/config.service';
import { HttpService } from 'src/app/Services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponenent,
    HomeComponent, MeteoComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [ConfigService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
