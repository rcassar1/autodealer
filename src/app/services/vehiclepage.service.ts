import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Vehicle } from '../models/vehicle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclepageService extends BaseService<Vehicle>{
    constructor(private http: HttpClient) {
      super();
    }

  
  
  override getById(id: string): Observable<Vehicle> {
  return this.http.get<Vehicle>(`http://localhost:4000/vehicles/id/${id}`);
}
  override getPaginated(skip: number, take: number): Observable<Vehicle[]> {
  return this.http.get<Vehicle[]>('');

  }
  override getCount(): Observable<number> {
    return this.http.get<number>('http://localhost:4000/vehicles/count');
  }

}
