import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API_PATH } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http:HttpClient) { }
  // finalParams(params){
  //   Object.keys(params).forEach((key) => (params[key] == '') && delete params[key]);
  //   return params;
  // }
  getLaunchesData(data){
    const url = environment.BASE_URL+API_PATH.API_VERSION+API_PATH.LAUNCHES;
    return this.http.get<any>(url,{
      params:data
    })
  }
}
