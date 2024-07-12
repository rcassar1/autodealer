import { AdminComponent } from './../admin/admin.component';
import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  providers: [],
  imports: [MatCard, MatCardActions, MatCardContent, MatCardTitle, MatFormField, MatToolbar, MatLabel, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public router: Router){ 

  }

//login auth and redirect to /admin
login () {

  this.router.navigate(['/admin']);
 
} 



}
