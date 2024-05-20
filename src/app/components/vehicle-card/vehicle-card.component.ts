import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../materialmodule/material/material.module';
import { Vehicle } from '../../models/vehicle';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss'
})
export class VehicleCardComponent {
@Input() vehicle!:Vehicle;
}
