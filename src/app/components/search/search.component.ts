// import { HomeComponent } from './../home/home.component';
// import { Component } from '@angular/core';
// import { Vehicle } from '../../models/vehicle';

// @Component({
//   selector: 'app-search',
//   standalone: true,
//   imports: [],
//   templateUrl: './search.component.html',
//   styleUrl: './search.component.scss'
// })
// export class SearchComponent {

//     filteredVehicles: Vehicle[] = [];
//     vehiclesList: Vehicle[] = [];
    
//     constructor (
//        private vehicleService: VehiclepageService,
//     private route: ActivatedRoute
//     ) {
//       this.vehiclesList =  this.HomeComponent.getVehicles();
//       this.filteredVehicles = this.vehiclesList;
//     }
  
//     filterResults(text: string) {
//       if (!text) {
//         this.filteredVehicles = this.vehiclesList;
//         return;
//       }
//       this.filteredVehicles = this.vehiclesList.filter(
//         this.vehiclesList => this.vehiclesList?.make.toLowerCase().includes(text.toLowerCase())
//       );
//     }
  
//   }
  
//   // export class filteredLocationList {
//   //   filteredLocationList: HousingLocation[] = [];
  
//   //   constructor() {
//   //     this.housingLocationList = this.housingService.getAllHousingLocations();
//   //     this.filteredLocationList = this.housingLocationList;
//   //   }
  
//   //   filterResults(text: string) {
//   //   if (!text) {
//   //     this.filteredLocationList = this.housingLocationList;
//   //     return;
//   //   }
  
//   //   this.filteredLocationList = this.housingLocationList.filter(
//   //     housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
//   //   );
//   // }


