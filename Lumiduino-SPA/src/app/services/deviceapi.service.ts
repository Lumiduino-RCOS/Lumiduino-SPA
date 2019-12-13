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
}

export interface DeviceListResponse{
  [id: string]: [string, number]; 
}