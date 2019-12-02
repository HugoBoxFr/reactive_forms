import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string = "Reactive Form";

  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({
      email: [''],
      password: ['']
    }),
    address: this.fb.group({
        street: [''],
        postal: [''],
        city: ['']
    })
  });

  user: User = new User;
  users: User[] = [];
  userDisplay: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
