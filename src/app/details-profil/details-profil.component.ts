import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Profile } from './details-profil.model';
@Component({
  selector: 'app-profile',
  templateUrl: './details-profil.component.html',
  styleUrls: ['./details-profil.component.css']
})
export class DetailsProfilComponent implements OnInit {
  id:any
   userDetails:Profile;
   mosquees:any
   code:any="af"
  constructor(private userService:UserService,private router:Router,private activateroute: ActivatedRoute,) {
    this.userDetails = new Profile;
   }

  ngOnInit(): void {
    console.log(this.code)
    this.id = this.activateroute.snapshot.params.id;

    this.userService.getUserServiceId(this.id).subscribe((data:any)=>{


      this.userDetails=data

    })


    this.getAll(this.id,this.code)
  }
  onSelectC(event:any){

this.code=event.target.value
this.getAll(this.id,this.code)

  }
  onLogout(){
    this.userService.deleteToken()
    this.router.navigate(['/home'])
  }
  getAll (id:any,code){
    this.userService.getService(id,code).subscribe((data:any)=>{
      console.log(data)
      console.log(code)
    this.mosquees=data

    })
  }
  getdetails(id:any,code:any){
    this.router.navigate(['/mosqueDetails',{id:id,code:code}])

  }
  editM(id:any,code:any){
    this.router.navigate(['/updateMosque',  { id: id,code:code}])

  }

}
