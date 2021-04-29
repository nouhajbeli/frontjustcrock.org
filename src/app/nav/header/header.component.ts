import { Component, OnInit} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../../shared/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   showMenu=false;
   menubar:any;
   role=localStorage.getItem('role')
   token=localStorage.getItem('token')

  constructor(public location: Location,private userService:UserService,private router:Router) {
  }


  ngOnInit() {

  }

  oppmenu(){
    const html = document.getElementsByClassName('left-menu')[0];
    html.classList.add('active');
    this.showMenu=true;
  }
  oppmenu1(){
    const html = document.getElementsByClassName('left-menu')[0];
    html.classList.remove('active');
    this.showMenu=false;
  }
  onLogout(){
    localStorage.clear();
    this.router.navigate(['/home'])
  }
}
