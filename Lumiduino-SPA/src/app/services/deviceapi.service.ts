import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeviceapiService {
  constructor(private http: HttpClient) {}

  get_device_list(): Observable<DeviceListResponse>{
    return this.http.get<DeviceListResponse>(environment.deviceApi+"/api/devices");
  }

  get_device_functions(device_id: string): Observable<any>{
    return this.http.get<any>(environment.deviceApi + "/api/device/" + device_id);
  }

  run_function(device_id: string, method_name: string, args: Array<any>): Observable<any> {
    return this.http.post<any>(environment.deviceApi + "/api/device/" + device_id,
      {
        method: method_name,
        args: args
      }
    )

  }
}

export interface DeviceListResponse{
  [id: string]: [string, number]; 
}