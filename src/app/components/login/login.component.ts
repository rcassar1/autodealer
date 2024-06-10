import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatFormFieldControl, MatLabel } from '@angular/material/form-field';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import path from 'path';
import { AdminComponent } from '../admin/admin.component';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [],
  imports: [MatCard, MatCardActions, MatCardContent, MatCardTitle, MatFormField, MatToolbar, MatLabel,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
router: any;

//login auth and redirect to /admin
login () {

  return this.router.navigate (['/admin']);
 
} 



}
