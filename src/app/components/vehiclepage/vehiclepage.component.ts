import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehiclepage',
  standalone: true,
  imports: [],
  templateUrl: './vehiclepage.component.html',
  styleUrl: './vehiclepage.component.scss'
})
export class VehiclepageComponent implements OnInit {
  vehicle!: Vehicle;

  constructor (
    private vehicleService: VehicleService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    
  }


}
