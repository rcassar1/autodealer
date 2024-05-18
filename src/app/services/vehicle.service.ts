import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}
  getById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`http://localhost:4000/vehicles/id/${id}`);
  }
  getPaginated(skip: number, take: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`http://localhost:4000/vehicles/getall?s=${skip}&t=${take}`);
  }

getCount(){
  return 11;
}

}
