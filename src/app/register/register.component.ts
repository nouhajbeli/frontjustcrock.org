import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showSuccessMessage:any
  serverErrorMessages:any;
  selectedCountry: any={} ;

  registerForm:FormGroup;
  submitted = false;
  selectedOption:any
  constructor(private _formBuilder:FormBuilder, private router : Router,private UserService:UserService) {
    this.createForm();
  }

  ngOnInit(): void {

  }



  createForm() {
    this.registerForm = this._formBuilder.group(
      {
          fullName:[""],
          email: [
              "",[ Validators.email]
          ],
          ville:[""],
          telephone:[""],
          idUser:[""],
          codePostal:[""],
          password:[""],
          adresse:[""],
            pays:[""],
          role:[""],

      }
  );
}
get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value)
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   console.log('error')
    //     return;
    // }

    // display form values on success
      this.UserService.addService(
          this.registerForm.value
      ).subscribe(
          (res:any)  =>{
              console.log('user added ',res)
              this.showSuccessMessage=true
              setTimeout(()=>this.showSuccessMessage=false,4000)
            this.router.navigateByUrl('/dashboard')
          },
            err =>{
              if(err.status=== 422)
               this.serverErrorMessages=err.error.join('<br/>')
               else
               this.serverErrorMessages='something went wrong .Please contact admin'
            }



          )


}
}
