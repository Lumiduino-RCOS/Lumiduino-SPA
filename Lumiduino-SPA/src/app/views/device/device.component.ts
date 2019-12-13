import { Component, OnInit } from '@angular/core';
import {DeviceapiService, DeviceListResponse} from '../../services/deviceapi.service'


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  private device_locations: Array<[string, string, number]>;
  constructor(private deviceApi: DeviceapiService) { }

  ngOnInit() {
    this.deviceApi.get_device_list().subscribe((data: DeviceListResponse) => {
      console.log(data);
      this.device_locations = [];
      Object.keys(data).forEach(id => {
        let arrpiece: [string, string, number] = ["", "", 0];
        arrpiece[0] = id;
        let addrspace = data[id];
        arrpiece[1] = addrspace[0];
        arrpiece[2] = addrspace[1];
        this.device_locations.push(arrpiece);
      });

      console.log(this.device_locations);
    }, (error) => {
      console.error(error);
    });
  }

  refreshDevices(){
    this.deviceApi.get_device_list().subscribe((data: DeviceListResponse) => {
      console.log(data);
      this.device_locations = [];
      Object.keys(data).forEach(id => {
        let arrpiece: [string, string, number] = ["", "", 0];
        arrpiece[0] = id;
        let addrspace = data[id];
        arrpiece[1] = addrspace[0];
        arrpiece[2] = addrspace[1];
        this.device_locations.push(arrpiece);
      });

      console.log(this.device_locations);
    }, (error) => {
      console.error(error);
    });
  }

}
