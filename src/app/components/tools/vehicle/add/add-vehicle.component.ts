import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../materialmodule/material/material.module';
import { VehicleService } from '../../../../services/vehicle.service';
import { Vehicle } from '../../../../models/vehicle';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MaterialModule, FormsModule, JsonPipe], 
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.scss'
})
export class AddVehicleComponent {

  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private service: VehicleService) {}

  addVehicleForm = new FormGroup ({
    make: new FormControl(),
    model: new FormControl(),
    kms: new FormControl(),
    colour: new FormControl(),
    featured: new FormControl(),
    photoUrl: new FormControl(),
    price: new FormControl(),
    year: new FormControl(),
  })


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Preview the image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  async submitAddVehicle() {
    var temp = this.addVehicleForm.value;
    var tempVehicle = new Vehicle(
      null,
      temp.make!,
      temp.model!,
      temp.kms!,
      temp.colour!,
      temp.featured!,
      temp.photoUrl!,
      temp.price!,
      temp.year!,
    );
  
    console.log(tempVehicle);
    tempVehicle.photoUrl = await this.getImageUrl();
    this.service.create(tempVehicle).subscribe( res =>{
      console.log('res ' , res);
    });
  }
  
  getImageUrl(): Promise<string> {
    const formData = new FormData();
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile, this.selectedFile.name);
    }
  
    return new Promise((resolve, reject) => {
      this.service.addVehicleImage(formData).subscribe({
        next: response => {
          console.log(response);
          resolve(response.photoUrl);
        },
        error: err => {
          console.error(err);
          reject(err);
        }
      });
    });
  }

}
