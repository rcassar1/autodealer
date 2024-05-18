import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButtonModule, MatButtonModule, MatIconModule, MatMenuModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',

})
export class NavComponent {}
