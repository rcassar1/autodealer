import { Vehicle } from './../../../../models/vehicle';
import { VehicleService } from './../../../../services/vehicle.service';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../materialmodule/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-admin-vehicle-card',
  standalone: true,
  imports: [MaterialModule, RouterLink, ReactiveFormsModule, JsonPipe ],
  templateUrl: './admin-vehicle-card.component.html',
  styleUrl: './admin-vehicle-card.component.scss'
})
export class AdminVehicleCardComponent {
    constructor (private service: VehicleService) {}

  @Input() vehicle!:Vehicle;
  

  deleteVehicle(_id: any) {
        this.service.delete(_id)
    .subscribe((response: any) =>{
    console.log (response);
      
    })
  }

}


