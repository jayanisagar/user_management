import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(public loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
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
          this.userList = res;
    });
  }

  onAction(action: string, id: number, userData: any) {
    switch (action) {
      case 'create':
        console.log('create');
        let obj1 = { first_name: 'sagar', last_name: 'jayani', email_address: 'jayanisagar@gmail.com', password: '123456', status: true };
        this.loginService.createUser(obj1).then(res => {
          this.loadData();
        });
        break;
      case 'edit':
        console.log('edit');
        this.idEditUser = id;
        this.setEditForm(userData);
        break;
      case 'delete':
        this.loginService.deleteUser(id).then(res => {
          this.loadData();
        });
        break;
      case 'active':
        this.loginService.activeDeactiveUser(id, true).then(res => {
          this.loadData();
        });
        break;
      case 'deactive':
        this.loginService.activeDeactiveUser(id, false).then(res => {
          this.loadData();
        });
        break;
      case 'activityUser':
        this.idActivityUser = id;
        
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
      this.activityUserList = res;
    });
  }
}
