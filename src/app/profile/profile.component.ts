import { ApiserviceService } from './../shared/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Profile } from './profile.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  editM: any;
  getdetails: any;
  code: any='af';
  id: any;
  userDetails: Profile;
  mosquees: any;
  prop: any;
  p:any;
  constructor(
    private userService: UserService,
    private apiserviceService: ApiserviceService,
    private router: Router,
    private activateroute: ActivatedRoute
  ) {
    this.userDetails = new Profile();
  }

  async ngOnInit() {
    await this.userService.getUserProfile().subscribe((data: any) => {
      const role = data.user.role;

      localStorage.setItem('role', role);

      this.userDetails = data.user;
      this.id = this.userDetails.id;
       console.log(this.userDetails);
    })

    console.log('id', this.id);

    // this.apiserviceService.getMosqueById;
  }
 onSelectC(event: any) {
    this.code = event.target.value;
    console.log(this.code);
  }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/home']);
  }
  getAll(id: any) {
    // this.userService.getService(id).subscribe((data:any)=>{
    //   console.log(data)
    // this.mosquees=data
    // })
  }
  getMosque(id: any, code) {
    this.apiserviceService
      .getMosqueByIdOwner(id, code)
      .subscribe((data: any) => {
        console.log(data);
        this.mosquees = data;
      });
  }
}

