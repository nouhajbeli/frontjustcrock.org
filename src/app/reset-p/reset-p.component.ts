import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service'
import {Router} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Toast} from 'materialize-css';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-p',
  templateUrl: './reset-p.component.html',
  styleUrls: ['./reset-p.component.css']
})
export class ResetPComponent implements OnInit {
  serverErrorMessages:any;
  registerForm: any;
  submitted = false;
  model={
    email:'',
  }
  showSuccessMessage
  constructor(private myService:UserService,private router:Router,private formBuilder: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

  });
  }
  get f() { return this.registerForm.controls; }
  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value)
   this.myService.resetService(this.registerForm.value).subscribe(

    (res:any)  =>{
      console.log(res)
      this.showSuccessMessage="email envoyer verifier votre email"
      this.toastr.success("Email  Envoyer")

        },
    err =>{
      console.log(err)
      this.toastr.error(err.error.error)

      
    }
  )
  }

}
