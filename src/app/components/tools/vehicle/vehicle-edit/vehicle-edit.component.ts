import { Observable } from 'rxjs';
import { Vehicle } from './../../../../models/vehicle';
import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { VehicleService } from '../../../../services/vehicle.service';
import { MaterialModule } from '../../../../materialmodule/material/material.module';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-edit',
  standalone: true,
  imports: [ MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    JsonPipe,
    MaterialModule,
    RouterLink,
  CommonModule,
 ],
  templateUrl: './vehicle-edit.component.html',
  styleUrl: './vehicle-edit.component.scss'
})
export class VehicleEditComponent {
  @Input() vehicle!:Vehicle;

  form: FormGroup;
  vehicleId: any;

  vehicles = [];

constructor( private service: VehicleService, private route: ActivatedRoute){

  this.form = new FormGroup({
    id: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
    kms: new FormControl(''),
    colour: new FormControl(''),
    featured: new FormControl(''),
    price: new FormControl(''),
    year: new FormControl(''),
  });
}

ngOnInit() {
  this.vehicleId = this.route.snapshot.paramMap.get('id');
  this.service.getById(this.vehicleId).subscribe((res: any) => {
    console.log(res);
    this.vehicle = res;
    this.form.patchValue({
      id: this.vehicle._id,
      make: this.vehicle.make,
      model: this.vehicle.model,
      kms: this.vehicle.kms,
      colour: this.vehicle.colour,
      featured: this.vehicle.featured,
      price: this.vehicle.price,
      year: this.vehicle.year,
    });
  });
}

// updateVehicle() {

//   var updatedData = {
//     _id: this.vehicle._id,
//     make: this.vehicle.make,
//     model: this.vehicle.model,
//     kms: this.vehicle.kms,
//     colour: this.vehicle.colour,
//     featured: this.vehicle.featured,
//     photoUrl: this.vehicle.photoUrl,
//     price: this.vehicle.price,
//     year: this.vehicle.year,
//   }

//   this.service.update(this.vehicleId, updatedData).subscribe(res => {
//     console.log (res)
//   });
// }

// }


// updateVehicleForm = new FormGroup ({
//   make: new FormControl(),
//   model: new FormControl(),
//   kms: new FormControl(),
//   colour: new FormControl(),
//   featured: new FormControl(),
//   photoUrl: new FormControl(),
//   price: new FormControl(),
//   year: new FormControl(),
// })

submitUpdateVehicle() {
  var temp = this.form.value;  
  var tempVehicle = new Vehicle(
    null,
    temp.make,
    temp.model,
    temp.kms,
    temp.colour,
    temp.featured,
    temp.photoUrl,
    temp.price,
    temp.year
  );
  console.log(tempVehicle);
  this.service.update(this.vehicleId, tempVehicle).subscribe(res => {
    console.log('res', res);
  });
}
}
