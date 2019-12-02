import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/user';
import { passwordValidator } from './password-validator';
import { emailValidator } from './email.validator';

@Component({
  selector: 'app-user3',
  templateUrl: './user3.component.html',
  styleUrls: ['./user3.component.css']
})
export class User3Component implements OnInit {
  title: string = "Reactive Form 3";

  userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    credentials: this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, passwordValidator]]
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
