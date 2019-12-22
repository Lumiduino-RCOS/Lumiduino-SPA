import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {DeviceComponent} from './views/device/device.component';
import { SingledeviceComponent } from './views/singledevice/singledevice.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "devices",
    component: DeviceComponent
  },
  {
    path: "device",
    component: SingledeviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
