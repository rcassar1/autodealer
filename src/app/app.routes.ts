import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { VehiclepageComponent } from './components/vehiclepage/vehiclepage.component';

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
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: 'vehicle/:id',
        component: VehiclepageComponent,
    }
 //*   {
 //*       path: '*',
 //*       component: NotfoundComponent,
 //*   },
];
