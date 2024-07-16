import { MatFormField, MatLabel } from '@angular/material/form-field';
import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import {
  MatDatepicker,
  MatDatepickerToggle,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { UserService } from '../../../../services/user.service';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Users } from '../../../../models/users';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [
    MatCard,
    MatFormField,
    MatLabel,
    MatCardContent,
    MatRadioButton,
    MatDatepicker,
    MatRadioGroup,
    MatDatepickerToggle,
    MatCardActions,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss',
})
export class NewUserComponent {
  constructor(private service: UserService) {}

  addUserForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    isAdmin: new FormControl(true),
  });

  onSubmit() {
    var temp = this.addUserForm.value;
    var tempUser = new Users(
      '',
      temp.name!,
      temp.lastName!,
      temp.address!,
      temp.email!,
      temp.password!,
      true
    );
    console.log(tempUser);
    this.service.create(tempUser).subscribe();
  }
}
