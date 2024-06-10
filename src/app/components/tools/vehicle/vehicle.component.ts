import { Component } from '@angular/core';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { VehicleService } from '../../../services/vehicle.service';
import { JsonPipe } from '@angular/common';
import { title } from 'process';


@Component({
  selector: 'app-edit-vehicle',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class EditVehicleComponent {
  form: FormGroup
;
addVehicle: any;

constructor( private service: VehicleService){
  this.form = new FormGroup({
    make: new FormControl('make'),
    model: new FormControl('model'),
    kms: new FormControl('kms'),
    colour: new FormControl('colour'),
    featured: new FormControl('featured'),
    price: new FormControl('price'),
    year: new FormControl('year'),
  });
}


onSubmit(){
  let form_value = this.form.value;
  this.service.create(form_value).subscribe({next: (r) => console.log(r)});
}

}
