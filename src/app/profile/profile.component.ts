import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { Profile } from './profile.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:any
   userDetails:Profile;
   mosquees:any
  constructor(private userService:UserService,private router:Router,private activateroute: ActivatedRoute,) {
    this.userDetails = new Profile;
   }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe((data:any)=>{
      const role = data.user.role;
      localStorage.setItem('role',role);

      this.userDetails=data.user

    })
    this.id = this.activateroute.snapshot.params.id;
     console.log('user',this.userDetails)
    this.getAll(this.id)
  }
  onLogout(){
    this.userService.deleteToken()
    this.router.navigate(['/home'])
  }
  getAll (id:any){
    // this.userService.getService(id).subscribe((data:any)=>{
    //   console.log(data)
    // this.mosquees=data

    // })
  }

}
