import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mosquee } from '../trouvermosqueetunisie/mosquee';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private  BASE_URL = "http://localhost:3000/api";
  constructor(private http:HttpClient) { }


  public getMosquees(code:any)
  {
    return this.http.get(this.BASE_URL +"/mosque/"+code);
  }
  getMosqueesAf(){
    return this.http.get(this.BASE_URL +"/mosque/af");

  }
  getMosqueesEu(){
    return this.http.get(this.BASE_URL +"/mosque/eu");

  }
  getMosqueesAmN(){
    return this.http.get(this.BASE_URL +"/mosque/na");

  }
  getMosqueesAmS(){
    return this.http.get(this.BASE_URL +"/mosque/sa");

  }
  getMosqueesAs(){
    return this.http.get(this.BASE_URL +"/mosque/as");

  }
  public getMosqueById(id:string,code:any)
  {
    return this.http.get<Mosquee>(this.BASE_URL+"/mosque/"+code+"/"+id);
  }

  public getQuranecrit()
  {
    return this.http.get("./assets/myjson/quranArFr.json");
  }



  addService(
  body:any
   ){


    return this.http.post<any>(this.BASE_URL+"/mosque/createMosque", body);
   }
   deleteServiceAf(id:any){
       const body={
         code:"af",
         idMosque:id
       }
       return this.http.put(this.BASE_URL+"/mosque/deleteMosque", body);

   }
   deleteServiceAs(id:any){
    const body={
      code:"as",
      idMosque:id
    }
    return this.http.put(this.BASE_URL+"/mosque/deleteMosque", body);
   }
   deleteServiceEu(id:any){
    const body={
      code:"eu",
      idMosque:id
    }
    return this.http.put(this.BASE_URL+"/mosque/deleteMosque", body);
   }
   deleteServiceAmN(id:any){
    const body={
      code:"na",
      idMosque:id
    }
    return this.http.put(this.BASE_URL+"/mosque/deleteMosque", body);
   }
   deleteServiceAmS(id:any){
    const body={
      code:"sa",
      idMosque:id
    }
    return this.http.put(this.BASE_URL+"/mosque/deleteMosque", body);
   }
   updateService(body:any){
    return this.http.put(this.BASE_URL+"/mosque/updateMosque",body)

   }
   editService(body:any){
    return this.http.put(this.BASE_URL+"/mosque/proprietaireAdd",body)
     }
   revendiquer(formData){
    return this.http.post("http://localhost:3000/api/contact/sendEmail",formData);
  }
}
