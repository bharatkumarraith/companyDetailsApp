import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }




baseauthurl="http://localhost:8080"
addUser(signupdata:any)
{
  return this.http.post(this.baseauthurl+"/user/create",signupdata)
}



getAllUsers()
{
  return this.http.get(this.baseauthurl+"/user/all")
}




// isloggedin:boolean=false;


logincheck(logindata: any) {
  return this.http.post(this.baseauthurl + "/user/login", logindata)
   
}


deleteEmployeeById(id: string) {
  return this.http.delete(`${this.baseauthurl}/user/delete/${id}`);
}


}



