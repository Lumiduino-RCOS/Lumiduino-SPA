import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MaterialModule} from "./material/material.module";
import { HomeComponent } from './views/home/home.component';
import { DeviceComponent } from './views/device/device.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable, ObservableInput, of} from 'rxjs';
import { SingledeviceComponent } from './views/singledevice/singledevice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DeviceComponent,
    SingledeviceComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    /*MatToolbarModule,
    MatMenuModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
