import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DeviceapiService} from '../../services/deviceapi.service';

@Component({
  selector: 'app-singledevice',
  templateUrl: './singledevice.component.html',
  styleUrls: ['./singledevice.component.css']
})
export class SingledeviceComponent implements OnInit {
  private device_id: string;
  private device_functions: Array<string>;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private devices: DeviceapiService) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      this.device_id = params['id'];
      console.log(this.device_id);
      this.queryDeviceFunctions();
    });
  }

  private queryDeviceFunctions(){
    this.devices.get_device_functions(this.device_id).subscribe(functions => {
      this.device_functions = functions;
    });
  }

}
