import { VehicleService } from './../../../../services/vehicle.service';
import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Vehicle } from '../../../../models/vehicle';
import { CommonModule, JsonPipe } from '@angular/common';
import { MaterialModule } from '../../../../materialmodule/material/material.module';
import { RouterLink } from '@angular/router';
import { AdminVehicleCardComponent } from '../admin-vehicle-card/admin-vehicle-card.component';


@Component({
  selector: 'app-find-delete',
  standalone: true,

  imports: [ CommonModule, MaterialModule , JsonPipe, AdminVehicleCardComponent ,RouterLink ],
  templateUrl: './find-delete.component.html',
  styleUrl: './find-delete.component.scss'
})
export class FindDeleteComponent {
  @Input() vehicle!:Vehicle;


  pageSize: number = 4;
  pageIndex: number = 0;
  vehicles: Vehicle[] = [];
  vehiclesCount!: number;
  VehicleService: any;
  
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
