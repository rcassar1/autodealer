import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

//create

//read
abstract getById(id: string): Observable<T>;
//read paged
abstract getPaginated(skip: number, take: number): Observable<T[]>;
abstract getCount():Observable<number>;


abstract addVehicle(
  id: string | null,
  make: string,
  model: string,
  kms: number,
  colour: string,
  featured: boolean,
  price: number,
  year: number
)
:Observable<T>;

//update

//delete


}