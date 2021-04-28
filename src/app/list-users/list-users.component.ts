import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../shared/user.service'
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  // dataSource = ELEMENT_DATA;
  p: number = 1;
  userFilter: any = { prenom: '' };
  users:any=[]
  constructor(private myService:UserService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAlluser()
  }
  getAlluser(){
    this.myService.getAllService().subscribe((data)=>{
      this.users=data
      console.log(this.users)

    })
  }
  deleteUser(id:any){
    this.myService.deleteService(id).subscribe((data)=>{
      console.log(data,'deleted')
      this.getAlluser()
    })
  }

}

export interface PeriodicElement {
  nomAssociation: string;
  prenom: number;
  email: string;
  telephone: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, name: 'Hydrogen', email: "kk@kk.kk", telephone: '222222'},
//   {id: 2, name: 'Helium', email: "kk@kk.kk", telephone: '255555'},
//   {id: 3, name: 'Lithium', email: "kk@kk.kk", telephone: '778442'},
//   {id: 4, name: 'Beryllium', email: "kk@kk.kk", telephone: '58521'},
//   {id: 5, name: 'Boron', email: "kk@kk.kk", telephone: '569852'},
//   {id: 6, name: 'Carbon', email: "kk@kk.kk", telephone: '123548'},
//   {id: 7, name: 'Nitrogen', email: "kk@kk.kk", telephone: '5236547'},
//   {id: 8, name: 'Oxygen', email: "kk@kk.kk", telephone: '4589652'},
//   {id: 9, name: 'Fluorine', email: "kk@kk.kk", telephone: '5698755'},
//   {id: 10, name: 'Neon', email: "kk@kk.kk", telephone: '2536987'},

// ];


