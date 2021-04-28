import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-proprietaire',
  templateUrl: './edit-proprietaire.component.html',
  styleUrls: ['./edit-proprietaire.component.css']
})
export class EditProprietaireComponent implements OnInit {
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
                  email: [
                      data.email,[ Validators.email]
                  ],
                  nomAssociation:[data.nomAssociation],
                  nomPresidentAssociation:[data.nomPresidentAssociation],
                  prenom:[data.prenom],
                  telephone:[data.telephone],
                  idUser:[data.id],
                  codePostal:[data.codePostal],
                  adresse:[data.adresse],
                  ville:[data.ville],
                    pays:[data.pays],
                    siteInternet:[data.siteInternet],
                    pageRéseauSociaux:[data.pageRéseauSociaux],
                  role:[data.role],

              }
          );

    })

}
get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;
    console.log(this.registerForm.value)
    // if (this.registerForm.invalid) {
    //   console.log('error')
    //     // return;
    // //     for (let el in this.registerForm.controls) {
    // //       if (this.registerForm.controls[el].errors) {
    // //         console.log(this.registerForm.controls[el].errors)
    // //       }
    // //  }
    // }

    // display form values on success
   this.UserService.editServiceProp(this.registerForm.value).subscribe(
    (res:any)  =>{
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
