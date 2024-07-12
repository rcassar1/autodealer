import { Vehicle } from './../models/vehicle';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAll(): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/getall`);
  }

  getFeatured(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/featured`);
  }

  getPaginated(skip: number, take: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.baseUrl}/getall?s=${skip}&t=${take}`);
  }
  override getCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`);
  }

  override addVehicle(
    id: string | null,
    make: string,
    model: string,
    kms: number,
    colour: string,
    featured: boolean,
    price: number,
    year: number
  
  
  ): Observable<Vehicle> {
    let post_object = {make, model, kms, colour, featured, price, year};
    return this.http.post<Vehicle>('http://localhost:4000/vehicles/add', post_object);
  }

  addVehicleImage(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/image`, formData);
  }

  create (object: Vehicle): Observable <Vehicle> {
    return this.http.post<Vehicle>('http://localhost:4000/vehicles/add', object);
  }

  delete (_id: any): Observable <Vehicle> {
    return this.http.delete<Vehicle>('http://localhost:4000/vehicles/delete/'+_id)
  }

  update (_id: any, tempVehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>('http://localhost:4000/vehicles/update/'+_id, tempVehicle)
  }

}
