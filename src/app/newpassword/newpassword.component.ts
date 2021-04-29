import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import M from 'materialize-css'
@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {

  serverErrorMessages:any;
  registerForm: any;
  submitted = false;
  token:any
  model={
    password:'',
  }
  constructor(private myService:UserService,private router:Router,private formBuilder: FormBuilder,private activateroute: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required]],

  });
  this.token = this.activateroute.snapshot.params.token;

  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value)
   this.myService.passwService(this.registerForm.value,this.token).subscribe(

    (res:any)  =>{
      console.log(res)

    this.router.navigateByUrl('/login')

    },
    err =>{
      console.log(err)
      this.toastr.error(err.error.error)

    
    }
  )
  }

}
