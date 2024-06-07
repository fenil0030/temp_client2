import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Profiles } from '../models/profiles';
const baseUrl = "http://180.211.100.74:5151/api/profilemaster/"

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(private http: HttpClient) { }

  //get all profiles details
  getAll(): Observable<Profiles[]> {
    return this.http.get<any>(`${baseUrl}GetProfiles`)
  }

  //get by id profiles details
  getById(id: number): Observable<Profiles> {
    return this.http.get(`${baseUrl}GetProfileById?id=${id}`)
  }

  //insert profiles details
  add(profile: Profiles): Observable<Profiles> {
    return this.http.post(`${baseUrl}AddProfile`, profile)
  }
}
