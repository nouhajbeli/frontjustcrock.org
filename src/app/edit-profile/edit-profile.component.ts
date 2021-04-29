import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../profile/profile.model'


@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  modifierProfile:FormGroup;
  showSuccessMessage:any
  serverErrorMessages:any;
  submitted = false;
  id:any;
  userDetails:Profile;
  constructor( private _formBuilder:FormBuilder, private router : Router,private userService:UserService,private activateroute: ActivatedRoute,
    ) {
      this.userDetails = new Profile();

      this.createForm();
     }

  ngOnInit(): void {}
  createForm() {
    this.id = this.activateroute.snapshot.params.id;
    console.log(this.id)
    this.userService.getServiceId(this.id).subscribe((data:any)=>{
            this.modifierProfile = this._formBuilder.group(
              {
                  fullName:[data.fullName],
                  email: [
                      data.email
                  ],
                  ville:[data.ville],
                  telephone:[data.telephone],
                  telephonefixe:[data.telephonefixe],
                  imageUrl:[data.imageUrl],
                  idUser:[data.id],
                  codePostal:[data.codePostal],
                  adresse:[data.adresse],
                    pays:[data.pays],
                  role:[data.role],
                  siteInternet:[data.siteInternet],
                  nomAssociation:[data.nomAssociation]


              }
          );
          console.log(this.modifierProfile.value)

    })

}
get f() { return this.modifierProfile.controls; }

enregistrerModification(){
    this.submitted = true;
    if (this.modifierProfile.invalid) {
      console.log('error')
        return;
    }

    // display form values on success
   this.userService.editServiceUser(this.modifierProfile.value)
    .subscribe(
      (res:any)  =>{
        console.log(res)
          this.showSuccessMessage=true
          setTimeout(()=>this.showSuccessMessage=false,4000)
        this.router.navigateByUrl('/userProfile')

      },
        err =>{
          if(err.status=== 422)
           this.serverErrorMessages=err.error.join('<br/>')
           else
           this.serverErrorMessages='something went wrong .Please contact admin'
        })

      }
      getAll(id: any) {
        // this.userService.getService(id).subscribe((data:any)=>{
        //   console.log(data)
        // this.mosquees=data
        // })
      }

}
