import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavComponent,
    
    MatTableModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
