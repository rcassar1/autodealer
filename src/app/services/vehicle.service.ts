import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class VehicleService extends BaseService<Vehicle> {
  constructor(private http: HttpClient) {
    super()
  }
  baseUrl='http://localhost:4000/vehicles';
  getById(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/id/${id}`);
  }
  getPaginated(skip: number, take: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/getall?s=${skip}&t=${take}`);
  }
  override getCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

}
