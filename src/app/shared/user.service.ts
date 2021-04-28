import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  BASE_URL = "http://localhost:3000/api";
  http: HttpClient;
  noAuthHeader={headers:new HttpHeaders({ 'Content-Type' : 'application/json; charset=utf-8'})}
    constructor(private httpClient: HttpClient) {
      this.http = httpClient;

  }
  setRole(role){
    localStorage.setItem('role',role);
  }
  login(authCredentials:any){
    return this.http.post('http://localhost:3000/api/user/authenticate',
    authCredentials,this.noAuthHeader)
  }
  setToken(token:any){
    localStorage.setItem('token',token)
  }

  deleteToken(){
    localStorage.removeItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getUserPayload(){
    var token=this.getToken()
    if(token){
      var userPayload=atob(token.split('.')[1]);
      return JSON.parse(userPayload)
    }else {
      return null
    }
  }
  getUserProfile(){
    return this.http.get(this.BASE_URL+'/user/userProfile',
    )
  }

  isLoggedIn(){
    var userPayload=this.getUserPayload()
    if(userPayload){
      return userPayload.exp > Date.now() /1000
    }else {
      return false
    }
  }
  userService(body:any){
    return this.http.post(this.BASE_URL+"/user/register", body,this.noAuthHeader);

   }


getAllService(){
  return this.http.get(this.BASE_URL+"/user/getUsers");

}
  addService (
    body:any

   ){
    return this.http.post(this.BASE_URL+"/user/createUser", body,this.noAuthHeader);
   }
   getService(id:string,code:string){
     return this.http.get(this.BASE_URL+"/mosque/getMosqueUser"+"/"+code+'/'+id);
   }
   deleteService(id:string){
     const body= {
      idUser:id
     }
     return this.http.put(this.BASE_URL+"/user/deleteUser" ,body)
   }
   resetService(email:string){
    return this.http.post(this.BASE_URL+"/user/reset-password",email)

   }
   passwService(password:string,token:string){
    return this.http.post(this.BASE_URL+"/user/newpassword/"+token,password)
   }
   blockService(id:any,status:any){
     const body={
      idUser:id,
      status:status
     }
     return this.http.put(this.BASE_URL+"/user/blockUser",body,this.noAuthHeader)
   }
   getServiceId(id:any){
     return this.http.get(this.BASE_URL+"/user/userProfileId/"+id,this.noAuthHeader)
   }
   editServiceUser(body:any){
     return this.http.put(this.BASE_URL+"/user/editUserByAdmin/",body,this.noAuthHeader)
   }
   editServiceProp(body:any){
    return this.http.put(this.BASE_URL+"/user/editProprietaire/",body,this.noAuthHeader)

   }
   getUserServiceId(id){
    return this.http.get(this.BASE_URL+"/user/userProfileId/"+id,this.noAuthHeader)

   }
}
