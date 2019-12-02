import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title: string = "Reactive Form";
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  postal = new FormControl('');
  city = new FormControl('');
  user: User = new User;
  users: User[] = [];
  userDisplay: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  signIn() {
      this.user.username = this.username.value;
      this.user.email = this.email.value;
      this.user.password = this.password.value;
      this.user.street = this.street.value;
      this.user.postal = this.postal.value;
      this.user.city = this.city.value;
      this.userDisplay = true;
      this.users.push(this.user);
      this.user = new User;2
  }

}
