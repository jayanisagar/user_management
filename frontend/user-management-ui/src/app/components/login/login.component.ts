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
  editForm: FormGroup;
  error: string = null;

  isLoginRegisterFlag: boolean = false;

  constructor(public loginService: LoginService,
    public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.initLoginForm();
    this.initForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      email_addr: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  initForm() {
    this.editForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const formValue = this.loginForm.value;
    this.error = null;
    
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
        console.log("message", this.error);
        if(res.success && res.message != 'User is Deactive') {
          this.router.navigate(['home']);
        } else {
          this.error = res.message;
          console.log("message", this.error);
        }
      });
    }
  
  }

  editSubmit() {
    const formValue = this.editForm.value;
    this.error = null;

    if(this.editForm.valid) {

      // Object create
      let obj = {
        first_name: formValue.first_name, 
        last_name: formValue.last_name, 
        email_address: formValue.email_address, 
        password: formValue.password
      };

      console.log("obj",  obj);

      this.loginService.createUser(obj).then(res => {

        if(res.message)
         this.error = res.message;
        this.editForm.reset();
        this.isLoginRegisterFlag = false;
      });
    }
  }

}
