import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../models/vehicle';
import { VehiclepageService } from '../../services/vehiclepage.service';

@Component({
  selector: 'app-vehiclepage',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './vehiclepage.component.html',
  styleUrl: './vehiclepage.component.scss'
})
export class VehiclepageComponent implements OnInit {
  vehicle!: Vehicle;
  id!: string;

  constructor (
    private vehicleService: VehiclepageService,
    private route: ActivatedRoute
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.vehicleService.getById(this.id).subscribe ({
      next: (result) => (this.vehicle = result),
      error: (err) => {
        console.log (err);
        window.alert ('Something went wrong');
      },
      complete: () => window.alert ('Successful'),
    });
  }
}  

