import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  showSuccessMessage:any
  serverErrorMessages:any;
  selectedCountry: any={} ;

  registerForm:FormGroup;
  submitted = false;
  selectedOption:any
  user:any
  id:any
  constructor(private _formBuilder:FormBuilder, private router : Router,private UserService:UserService,private activateroute: ActivatedRoute,) {

    this.createForm();
  }

  ngOnInit(): void {



  }



  createForm() {
    this.id = this.activateroute.snapshot.params.id;

    this.UserService.getServiceId(this.id).subscribe((data:any)=>{
            this.registerForm = this._formBuilder.group(
              {
                  fullName:[data.fullName],
                  email: [
                      data.email,[ Validators.email]
                  ],
                  ville:[data.ville],
                  telephone:[data.telephone],
                  idUser:[data.id],
                  codePostal:[data.codePostal],
                  adresse:[data.adresse],
                    pays:[data.pays],
                  role:[data.role],

              }
          );

    })

}
get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value)
    if (this.registerForm.invalid) {
      console.log('error')
        return;
    }

    // display form values on success
   this.UserService.editServiceUser(this.registerForm.value)
    .subscribe(
      (res:any)  =>{
          this.showSuccessMessage=true
          setTimeout(()=>this.showSuccessMessage=false,4000)
        this.router.navigateByUrl('/dashboard')
      },
        err =>{
          if(err.status=== 422)
           this.serverErrorMessages=err.error.join('<br/>')
           else
           this.serverErrorMessages='something went wrong .Please contact admin'
        })

      }

}

