import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { MaterialModule } from '../../materialmodule/material/material.module';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';

@Component({
  selector: 'app-showroom',
  standalone: true,
  imports: [ CommonModule, MaterialModule , JsonPipe, VehicleCardComponent ],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.scss'
})
export class ShowroomComponent {

  pageSize: number = 4;
  pageIndex: number = 0;
  vehicles: Vehicle[] = [];
  vehiclesCount!: number;
  
  constructor(private service: VehicleService) {}
  ngOnInit(): void {
    this.getVehicles();
    this.service.getCount().subscribe({
      next: (v) => (this.vehiclesCount = v),
    });
  }

  getVehicles() {
    this.service
      .getPaginated(this.pageSize * this.pageIndex, this.pageSize)
      .subscribe({
        next: (d) => {
          console.log(d);
          this.vehicles = d;
        },
      });
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageIndex = e.pageIndex;
    if (e.previousPageIndex != this.pageIndex) {
      this.getVehicles();
    }
    if (e.pageSize != this.pageSize) {
      this.pageSize = e.pageSize;
      this.getVehicles();
    }
  }

}
