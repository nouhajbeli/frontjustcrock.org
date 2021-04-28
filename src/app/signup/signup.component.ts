import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;
  showSuccessMessage:any
  serverErrorMessages:any;
  constructor(private _formBuilder:FormBuilder, private router : Router,private UserService:UserService,private toastr: ToastrService) {
    this.createForm();
  }

  ngOnInit(): void {

  }

  createForm() {
    this.registerForm = this._formBuilder.group(
        {
            email: [ "",[Validators.required, Validators.email]],
            fullName: ["", Validators.required],
            password: ['', [Validators.required, Validators.minLength(4)]],
            role: ['user', ],

        }
    );
}

get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('error')
        return;
    }

    // display form values on success
     console.log(this.registerForm.value)
     this.UserService.userService(
      this.registerForm.value
  ).subscribe(
      (res:any)  =>{
          console.log('user added ',res)
          this.showSuccessMessage=true
          setTimeout(()=>this.showSuccessMessage=false,4000)
        this.router.navigateByUrl('/login')
      },
        err =>{
          if(err.status=== 409)
          this.toastr.error(err.error.error)
          else
          this.toastr.error('something went wrong .Please contact admin')

        }



      )


}

}
