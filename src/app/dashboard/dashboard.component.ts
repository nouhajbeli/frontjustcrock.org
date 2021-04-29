
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {UserService} from '../shared/user.service'
import { ApiserviceService } from '../shared/apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  p:any;
  isExpanded: Boolean = false;
  display: string = 'users';
  query: string = '';
  users: any;
  mosqueesAf: any;
  mosqueesEu:any
  mosqueesAs:any
  mosqueesAmN:any
  mosqueesAmS:any

  result: any;
  proprietaires:any
  webmasters:any
  role=localStorage.getItem('role')
  constructor(private userService:UserService,private router: Router, private _service:ApiserviceService) {}

  ngOnInit() {
    this.userService.getAllService().subscribe((res:any) => {
      this.users=res.filter((user:any) => user.role == 'user')

    });
    this.userService.getAllService().subscribe((res:any) => {
      this.proprietaires=res.filter((user:any) => user.role == 'propriétaire')

    });
    this.userService.getAllService().subscribe((res:any) => {
      this.webmasters=res.filter((user:any) => user.role == 'webmaster')

    });
    this._service.getMosqueesAf().subscribe(
      (data:any)=>{
        this.mosqueesAf= data;
         })
    this._service.getMosqueesEu().subscribe((data:any)=>{
      this.mosqueesEu=data
    })
    this._service.getMosqueesAs().subscribe((data:any)=>{
      this.mosqueesEu=data
    })
    this._service.getMosqueesAmN().subscribe((data:any)=>{
      this.mosqueesAmN=data
    })
    this._service.getMosqueesAmS().subscribe((data:any)=>{
      this.mosqueesAmS=data
    })
  }

  toggleClass() {
    this.isExpanded = !this.isExpanded;
  }

  changeDisplay(display: string) {
    this.display = display;
  }

  getProfile(id: any) {
    this.router.navigate(['/DetailsProfil', id])

  }
  getProfileP(id: any) {
    this.router.navigate(['/DetailsProfil', id])

  }

  changeStatus(id: string, role: string, status: string) {
    if (role === 'user') {
         this.userService.blockService(id,status).subscribe(() => {
          this.userService.getAllService().subscribe((res:any) => {
             this.users=res.filter((user:any) => user.role == 'user')

        });
      });
    } else if(role==='propriétaire') {
      this.userService.blockService(id,status).subscribe(() => {
        this.userService.getAllService().subscribe((res:any) => {
           this.proprietaires=res.filter((user:any) => user.role == 'propriétaire')

      });
    });
    }else if (role=== 'webmaster'){
      this.userService.blockService(id,status).subscribe(() => {
        this.userService.getAllService().subscribe((res:any) => {
           this.webmasters=res.filter((user:any) => user.role == 'webmaster')

      });
    });
    }
  }

  search(input: any) {
    if (input.length === 0) {
      this.result = undefined;
      return;
    } else if (this.display === 'users') {
      var arr:any = [];

      for (var ele of this.users) {
        console.log("ele",ele)
        if (ele.fullName && ele.fullName.toLowerCase().includes(input.toLowerCase()) ||ele.prenom && ele.prenom.toLowerCase().includes(input.toLowerCase())){
          arr.push(ele);
        }
    }
    this.result = arr;
console.log('res',this.result)

  }else if (this.display === 'proprietaires') {
    var arr:any = [];

    for (var ele of this.proprietaires) {
      if (ele.fullName && ele.fullName.toLowerCase().includes(input.toLowerCase()) ||ele.prenom && ele.prenom.toLowerCase().includes(input.toLowerCase())){
        arr.push(ele);
      }
  }
  this.result = arr;

}else if (this.display === 'webmaster') {
  var arr:any = [];

  for (var ele of this.webmasters) {
    if (ele.fullName && ele.fullName.toLowerCase().includes(input.toLowerCase()) ||ele.prenom && ele.prenom.toLowerCase().includes(input.toLowerCase())){
      arr.push(ele);
    }
}
this.result = arr;
}else if (this.display === 'Afrique') {
  var arr:any = [];

  for (var ele of this.mosqueesAf) {
    if (ele.nomMosquee && ele.nomMosquee.toLowerCase().includes(input.toLowerCase()) ||ele.adresse && ele.adresse.toLowerCase().includes(input.toLowerCase())){
      arr.push(ele);
    }
}
this.result = arr;
}else if (this.display === 'Europe') {
  var arr:any = [];

  for (var ele of this.mosqueesEu) {
    if (ele.nomMosquee && ele.nomMosquee.toLowerCase().includes(input.toLowerCase()) ||ele.adresse && ele.adresse.toLowerCase().includes(input.toLowerCase())){
      arr.push(ele);
    }
}
this.result = arr;
}else if (this.display === 'Asia') {
  var arr:any = [];

  for (var ele of this.mosqueesAs) {
    if (ele.nomMosquee && ele.nomMosquee.toLowerCase().includes(input.toLowerCase()) ||ele.adresse && ele.adresse.toLowerCase().includes(input.toLowerCase())){
      arr.push(ele);
    }
}
this.result = arr;
}else if (this.display === 'ameriqueN') {
  var arr:any = [];

  for (var ele of this.mosqueesAmN) {
    if (ele.nomMosquee && ele.nomMosquee.toLowerCase().includes(input.toLowerCase()) ||ele.adresse && ele.adresse.toLowerCase().includes(input.toLowerCase())){
      arr.push(ele);
    }
}
this.result = arr;
}else if (this.display === 'ameriqueS') {
  var arr:any = [];

  for (var ele of this.mosqueesAmS) {
    if (ele.nomMosquee && ele.nomMosquee.toLowerCase().includes(input.toLowerCase()) ||ele.adresse && ele.adresse.toLowerCase().includes(input.toLowerCase())){
      arr.push(ele);
    }
}
this.result = arr;
}
}
edituser(id:any){
  this.router.navigate(['/editUser',id])
}

editProprietaire(id){
  this.router.navigate(['/editproprietaire',id])

}
ajoutUser(){
  this.router.navigate(['/register'])

}
  deleteMosqueeAf(id: any) {
    this._service.deleteServiceAf(id).subscribe((data)=>{
      console.log(data)
      this._service.getMosqueesAf().subscribe(
        (data:any)=>{
          this.mosqueesAf= data;
          console.log(this.mosqueesAf)
           })
    })

  }
  deleteMosqueeAs(id:any){
    this._service.deleteServiceAs(id).subscribe((data)=>{
      console.log(data)
      this._service.getMosqueesAs().subscribe(
        (data:any)=>{
          this.mosqueesAs= data;
          console.log(this.mosqueesAs)
           })
    })
  }
  deleteMosqueeEu(id:any){
    this._service.deleteServiceEu(id).subscribe((data)=>{
      console.log(data)
      this._service.getMosqueesEu().subscribe(
        (data:any)=>{
          this.mosqueesEu= data;
          console.log(this.mosqueesEu)
           })
    })
  }
  deleteMosqueeAmN(id:any){
    this._service.deleteServiceAmN(id).subscribe((data)=>{
      console.log(data)
      this._service.getMosqueesAmN().subscribe(
        (data:any)=>{
          this.mosqueesAmN= data;
          console.log(this.mosqueesAmN)
           })
    })
  }
  deleteMosqueeAmS(id:any){
    this._service.deleteServiceAmS(id).subscribe((data)=>{
      console.log(data)
      this._service.getMosqueesAmS().subscribe(
        (data:any)=>{
          this.mosqueesAmN= data;
          console.log(this.mosqueesAmN)
           })
    })
  }
  editMosqueeAf(id:any){
    this.router.navigate(['/updateMosque',  { id: id,code:"af"}])

  }
  editMosqueeAs(id:any){
    this.router.navigate(['/updateMosque',  { id: id,code:"as"}])


  }
  editMosqueeAmN(id:any){
    this.router.navigate(['/updateMosque',  { id: id,code:"na"}])

  }
  editMosqueeAmS(id:any){
    this.router.navigate(['/updateMosque',  { id: id,code:"sa"}])

  }
  editMosqueeEu(id:any){
    this.router.navigate(['/updateMosque',  { id: id,code:"eu"}])

  }
  getMosqueeAf(id:any){
    this.router.navigate(['/mosqueDetails',{id:id,code:"af"}])
  }
  getMosqueeEu(id:any){
    this.router.navigate(['/mosqueDetails',{id:id,code:"eu"}])

  }
  getMosqueeAs(id:any){
    this.router.navigate(['/mosqueDetails',{id:id,code:"as"}])

  }
  getMosqueeAmN(id:any){
    this.router.navigate(['/mosqueDetails',{id:id,code:"na"}])

  }
  getMosqueeAmS(id:any){
    this.router.navigate(['/mosqueDetails',{id:id,code:"sa"}])

  }
  ajoutPAf(id:any){
    this.router.navigate(['/addPropMosque',{id:id,code:"af"}])

  }
  ajoutPEu(id:any){
    this.router.navigate(['/addPropMosque',{id:id,code:"eu"}])

  }
  ajoutPAs(id:any){
    this.router.navigate(['/addPropMosque',{id:id,code:"as"}])

  }
  ajoutPAmN(id:any){
    this.router.navigate(['/addPropMosque',{id:id,code:"na"}])

  }
  ajoutPAmS(id:any){
    this.router.navigate(['/addPropMosque',{id:id,code:"sa"}])

  }

  deleteuser(id:any){
this.userService.deleteService(id).subscribe((data)=>{
  this.userService.getAllService().subscribe((res:any) => {
    this.users=res.filter((user:any) => user.role == 'user')

  });})
  }
  deleteProp(id:any){
    this.userService.deleteService(id).subscribe((data)=>{
      this.userService.getAllService().subscribe((res:any) => {
        this.proprietaires=res.filter((user:any) => user.role == 'propriétaire')

      });})
  }
  deleteWebmaster(id:any){
    this.userService.deleteService(id).subscribe((data)=>{
      this.userService.getAllService().subscribe((res:any) => {
        this.webmasters=res.filter((user:any) => user.role == 'webmaster')

      });})
  }
  ajoutMosquee(code:any){
this.router.navigate(['add',code])
  }
  Logout() {
    localStorage.clear();
    this.router.navigate(['']).then(() => {
      location.reload();
    });
  }

}
