import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { VehiclepageComponent } from './components/vehiclepage/vehiclepage.component';
import { EditVehicleComponent } from './components/tools/vehicle/vehicle.component';
import { AddVehicleComponent } from './components/tools/vehicle/add/add-vehicle.component';
import { NewUserComponent } from './components/tools/user/new-user/new-user.component';
import { ShowroomComponent } from './components/showroom/showroom.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'showroom',
    component: ShowroomComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'vehicle/:id',
    component: VehiclepageComponent,
  },
  {
    path: 'editvehicle',
    component: EditVehicleComponent,
  },
  {
    path: 'addvehicle',
    component: AddVehicleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: NewUserComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },

  //*   {
  //*       path: '*',
  //*       component: NotfoundComponent,
  //*   },
];
