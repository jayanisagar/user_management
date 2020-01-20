import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  login = environment.baseUrl + 'oauth/token';

  users = environment.baseUrl + 'user_managements';

  user_activities = environment.baseUrl + 'user_activities';

  constructor(private httpClient: HttpClient) { }

  loginUser(userDetails): Promise<any> {
    return this.httpClient.post(this.login, userDetails).toPromise();
  }

  getUserList(): Promise<any> {
    return this.httpClient.get(this.users).toPromise();
  }

  createUser(userDetails): Promise<any> {
    return this.httpClient.post(this.users, userDetails).toPromise();
  }
  editUser(id, userDetails): Promise<any> {
    return this.httpClient.put(this.users+'/'+id+'?'+userDetails, '').toPromise();
  }
  deleteUser(id): Promise<any> {
    return this.httpClient.delete(this.users+'/'+id).toPromise();
  }
  activeDeactiveUser(id, userDetails): Promise<any> {
    return this.httpClient.put(this.users+'/status/'+id+'?'+userDetails, '').toPromise();
  }

  activityUser(id): Promise<any> {
    id = 1;
    return this.httpClient.get(this.user_activities+'/'+id).toPromise();
  }

}
