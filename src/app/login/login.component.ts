import { LoginService } from './../login.service';
import { Login } from './../login';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  login:Login = new Login();

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'emailAddress' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required,Validators.minLength(8),Validators.maxLength(16)])
    });
  }

  userLogin()
  {
    console.log(this.login);
    this.loginService.loginUser(this.login).subscribe(data=>{
      alert("User registered succesfully")
    },error=>alert("Email Id is already Registered"));

  }

  get emailAddress() {
    return this.loginForm.get('emailAddress');
  }
  get password() {
    return this.loginForm.get('password');
  }
  clicksub() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

}
