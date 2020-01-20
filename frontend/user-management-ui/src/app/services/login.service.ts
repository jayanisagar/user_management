import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/constants';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userDetailsSubject: Subject<any> = new Subject<any>();

  constructor(private dataService: DataService) { }

  loginUser(obj): Promise<any> {

    let reuqestDataObj = obj;

    const promise = new Promise<any>((resolve, reject) => {
      this.dataService.loginUser(reuqestDataObj)
        .then(res => {
          resolve(res);
          if(res.success && res.message != 'User is Deactive') {
            if (res && res.data && res.data.user) {
              this.setUser(res.data.user);
              this.setToken(res.data.user.first_name);
              resolve(res);
            }
          }
        }).catch(error => reject());
    });

    return promise;
  }

  logoutUser() {
    localStorage.clear();
    this.userDetailsSubject.next(null);
  }

  setUser(user: any) {
    this.userDetailsSubject.next(user);
    localStorage.setItem(Constants.userDetails, JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem(Constants.userDetails));
  }

  setToken(session: any) {
    localStorage.setItem(Constants.accessToken, session);
  }

  getToken(): any {
    return localStorage.getItem(Constants.accessToken);
  }

  userList: any[] = [
    { id: 1, first_name: 'sagar', last_name: 'jayani', email_address: 'jayanisagar@gmail.com', password: '123456', status: true },
    { id: 2, first_name: 'sagar', last_name: 'jayani', email_address: 'jayanisagar@gmail.com', password: '123456', status: false },
    { id: 3, first_name: 'sagar', last_name: 'jayani', email_address: 'jayanisagar@gmail.com', password: '123456', status: true }
  ];
  
  getUserList(): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.dataService.getUserList()
        .then(res => {
          if (res) {
            resolve(res);
          }
        }).catch(error => reject());
        //return resolve(this.userList);
    });

    return promise;
  }

  createUser(obj): Promise<any> {

    let reuqestDataObj = obj;

    const promise = new Promise<any>((resolve, reject) => {
      this.dataService.createUser(reuqestDataObj)
        .then(res => {
          if (res) {
            resolve(res);
          }
        }).catch(error => reject());
    });

    return promise;
  }

  editUser(id, obj): Promise<any> {

    let reuqestDataObj = "first_name="+obj.first_name+"&last_name="+obj.last_name +
    "&email_address="+ obj.email_address+"&password="+ obj.password+"&status="+obj.status;

    const promise = new Promise<any>((resolve, reject) => {
      this.dataService.editUser(id, reuqestDataObj)
        .then(res => {
          if (res) {
            resolve(res);
          }
        }).catch(error => reject());
    });

    return promise;
  }

  deleteUser(obj): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.dataService.deleteUser(obj)
        .then(res => {
          if (res) {
            resolve(res);
          }
        }).catch(error => reject());
    });

    return promise;
  }

  activeDeactiveUser(id, obj): Promise<any> {

    let reuqestDataObj = 'status='+obj;

    const promise = new Promise<any>((resolve, reject) => {
      this.dataService.activeDeactiveUser(id, reuqestDataObj)
        .then(res => {
          if (res) {
            resolve(res);
          }
        }).catch(error => reject());
    });

    return promise;
  }

  activityUser(id): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      this.dataService.activityUser(id)
        .then(res => {
          if (res) {
            resolve(res);
          }
        }).catch(error => reject());
    });

    return promise;
  }
}
