import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUp(data: NgForm){
    const email = data.value.email;
    const password = data.value.password;
    this.authService.signUpUser(email,password);
  }
  logIn(data: NgForm){
    const email = data.value.email;
    const password = data.value.password;
    alert(email)
    this.authService.signInUser(email,password);
  }
}
