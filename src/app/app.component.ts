import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { EditVehicleComponent } from './components/tools/vehicle/vehicle.component';
import { AddVehicleComponent } from './components/tools/vehicle/add/add-vehicle.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserComponent } from './components/tools/user/new-user/new-user.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { AdminComponent } from './components/admin/admin.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    EditVehicleComponent,
    AddVehicleComponent,
    LoginComponent,
    NewUserComponent,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    BannerComponent,
    FeaturedComponent,
    AdminComponent,
    
    

    
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 })
export class AppComponent {
  title = 'autodealer';
}
