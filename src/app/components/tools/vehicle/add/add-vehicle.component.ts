import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../materialmodule/material/material.module';
import { VehicleService } from '../../../../services/vehicle.service';
import { Vehicle } from '../../../../models/vehicle';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MaterialModule, FormsModule, JsonPipe], 
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss'
})
export class AddVehicleComponent {

  constructor(private service: VehicleService) {}

  addVehicleForm = new FormGroup ({
    make: new FormControl(),
    model: new FormControl(),
    kms: new FormControl(),
    colour: new FormControl(),
    featured: new FormControl(),
    photoUrl: new FormControl(),
    price: new FormControl(),
    year: new FormControl(),
  })

  submitAddVehicle() {
    var temp = this.addVehicleForm.value;
    var tempVehicle = new Vehicle(
      '',
      temp.make!,
      temp.model!,
      temp.kms!,
      temp.colour!,
      temp.featured!,
      temp.photoUrl!,
      temp.price!,
      temp.year!,
    );
    console.log(tempVehicle);
    this.service.create(tempVehicle).subscribe();
  }

}
