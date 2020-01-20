import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList: any[] = [];
  activityUserList: any[] = [];

  editForm: FormGroup;
  idEditUser: number = 0;
  idActivityUser: number = 0;

  userDetail : any = null;

  constructor(public loginService: LoginService, private fb: FormBuilder,
    public router: Router) {
      this.loginService.userDetailsSubject.subscribe(res => {
        this.userDetail = res;
        console.log("this.userDetail", this.userDetail);
      });
     }

  ngOnInit() {

    

    this.userDetail = this.loginService.getUser();

    this.initForm();
    this.loadData();
  }

  initForm() {
    this.editForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_address: ['', Validators.required],
      password: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  loadData() {
    this.loginService.getUserList().then(res => {
        if(res.data)
          this.userList = res.data;
    });
  }

  onAction(action: string, id: number, userData: any) {
    switch (action) {
      case 'create':
        let obj1 = { first_name: 'sagar', last_name: 'jayani', email_address: 'jayanisagar@gmail.com', password: '123456', status: true };
        this.loginService.createUser(obj1).then(res => {
          this.loadData();
        });
        break;
      case 'edit':
        this.idEditUser = id;
        this.setEditForm(userData);
        break;
      case 'delete':
        this.loginService.deleteUser(id).then(res => {
          this.loadData();
        });
        break;
      case 'active':
        this.loginService.activeDeactiveUser(id, 1).then(res => {
          this.loadData();
        });
        break;
      case 'deactive':
        this.loginService.activeDeactiveUser(id, 0).then(res => {
          this.loadData();
        });
        break;
      case 'activityUser':
        this.idActivityUser = id;
        this.getActiveUser();
        
    }
  }

  setEditForm(userData) {
    if(userData) {
      this.editForm.patchValue({
        first_name: userData.first_name, 
        last_name: userData.last_name, 
        email_address: userData.email_address, 
        password: userData.password, 
        status: userData.status
      });
    }
  }

  editSubmit() {
    const formValue = this.editForm.value;

    if(this.editForm.valid) {

      // Object create
      let obj = {
        first_name: formValue.first_name, 
        last_name: formValue.last_name, 
        email_address: formValue.email_address, 
        password: formValue.password, 
        status: formValue.status
      };

      console.log("obj",  obj);

      this.loginService.editUser(this.idEditUser, obj).then(res => {
        this.idEditUser = 0;
        this.loadData();
      });
    }
  }

  getActiveUser() {
    this.loginService.activityUser(this.idActivityUser).then(res => {
      console.log(res);
      this.activityUserList = res.data;
    });
  }

  logout() {
    this.userDetail = null;
    this.loginService.logoutUser();
    this.router.navigate(['../login']);
  }
}
