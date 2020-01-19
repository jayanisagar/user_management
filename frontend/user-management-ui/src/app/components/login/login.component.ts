import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string = null;

  constructor(public loginService: LoginService,
    public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email_addr: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const formValue = this.loginForm.value;

    if(this.loginForm.valid) {

      // Object create
      let obj = {
        'username': formValue.email_addr,
        'password': formValue.password,
        'grant_type': 'password',
        'client_id':2,
        'client_secret': 'yjWWc0fgaR0DZZy1bMOWSswrVbcNaOTTWNtSneIR'
      };

      this.loginService.loginUser(obj).then(res => {
        if(res) {
          this.router.navigate(['home']);
        } else {
          this.error = 'Not user';
        }
      });
    }
  
  }

}
