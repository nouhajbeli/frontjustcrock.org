import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../shared/apiservice.service';

@Component({
  selector: 'app-edit-mosque',
  templateUrl: './edit-mosque.component.html',
  styleUrls: ['./edit-mosque.component.css']
})
export class EditMosqueComponent implements OnInit {
  showSuccessMessage:any
  serverErrorMessages:any;
  submitted = false;
  id:any;
  updateMosqueForm:any;
  Edit:any;
  onSelectimage:any;
  UpdateMosque:FormGroup;
  code:any;
  constructor( private _formBuilder:FormBuilder, private router : Router,private MosqueService:ApiserviceService,private activateroute: ActivatedRoute,
    ) {
      this.createForm();
     }

  ngOnInit(): void { }

  createForm(){
    this.id = this.activateroute.snapshot.params.id;
    this.code=this.activateroute.snapshot.params.code
    this.MosqueService.getMosqueById(this.id,this.code).subscribe((data:any)=>{
      this.UpdateMosque = this._formBuilder.group(
        {
          idMosque:[data.id],
          nomMosquee:[data.nomMosquee],
          adresse:[data.adresse],
          imamMosquee:[data.imamMosquee],
          imageUrl:[data.imageUrl],
          siteWeb:[data.siteWeb],
          email:[data.email,[ Validators.email]],
           associationMosquee:[data.associationMosquee],
          lat:[data.lat],
          lng:[data.Ing],
          openingHours:[data.openingHours],
          municipality:[data.municipality],
          facebook:[data.facebook],
          nomGestionnaire:[data.nomGestionnaire],
          sallePriereFemmes:[data.sallePriereFemmes],
          mosqueeSallePriere:[data.mosqueeSallePriere],
          fermetureExeptionnelle:[data.fermetureExeptionnelle],
          telephone:[data.telephone],
          telephone1:[data.telephone1],
          ouvertureMosquee:[data.ouvertureMosquee],
          code:[this.code]

        }
    );

})

}
get f() { return this.UpdateMosque.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.UpdateMosque.invalid) {
      console.log('error')
        return;
    }

    // display form values on success
   this.MosqueService.updateService(this.UpdateMosque.value).subscribe(
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




