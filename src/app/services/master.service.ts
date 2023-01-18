import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  userInfo = [{"name":"yamin","age":20},{"name":"jisan","age":22}]

  getUserData(){
    return this.userInfo;
  }
}
 