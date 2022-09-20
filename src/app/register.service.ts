import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httclient:HttpClient) { }
  baseUrl="http://localhost:8088"
  registerUser(user:User) : Observable<object>{
    console.log(user);   
   return  this.httclient.post(`${this.baseUrl}/user`,user);
  }

  findAllRegisterUser() : Observable<User[]>{
    return this.httclient.get<User[]>(`${this.baseUrl}/view`)
  }

  UpdateUserById(id : number): Observable<User>{
    //alert("ghj")
    return this.httclient.get<User>(`${this.baseUrl}/view/${id}`)
  }
  updateUser(id:number,user:User) :Observable<object>{
    return this.httclient.put(`${this.baseUrl}/update/${id}`,user)
  }

  deleteUser(id:number) :Observable<object>{
    return this.httclient.delete(`${this.baseUrl}/delete/${id}`)
  }

  // getDropdownData():Observable<object>{

  //   return this.httclient.get(`${this.baseUrl}/select`);
  // }
}
