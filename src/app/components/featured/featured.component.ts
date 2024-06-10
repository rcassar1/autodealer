import { VehiclepageService } from './../../services/vehiclepage.service';
import { Component, Input, OnInit, } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { MaterialModule } from '../../materialmodule/material/material.module';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { Vehicle } from '../../models/vehicle';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-featured',
  standalone: true,
  providers: [HttpClient],
  imports: [
    CommonModule,
    MaterialModule,
    JsonPipe,
    VehicleCardComponent,
    RouterLink,
    MatCard,
  ],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss',
})
export class FeaturedComponent implements OnInit {
 @Input() featuredVehicles: any[] = [];

  constructor(private VehicleService: VehicleService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.VehicleService.getFeatured().subscribe((vehicle: Vehicle[]) => {
      this.featuredVehicles = vehicle;
    });
  }
}
