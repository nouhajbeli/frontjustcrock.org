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
          idMosque:[data.foundMosque.id],
          nomMosquee:[data.foundMosque.nomMosquee],
          adresse:[data.foundMosque.adresse],
          imamMosquee:[data.foundMosque.imamMosquee],
          imageUrl:[data.foundMosque.imageUrl],
          siteWeb:[data.foundMosque.siteWeb],
          email:[data.foundMosque.email,[ Validators.email]],
           associationMosquee:[data.foundMosque.associationMosquee],
          lat:[data.foundMosque.lat],
          lng:[data.foundMosque.Ing],
          openingHours:[data.foundMosque.openingHours],
          municipality:[data.foundMosque.municipality],
          facebook:[data.foundMosque.facebook],
          nomGestionnaire:[data.foundMosque.nomGestionnaire],
          sallePriereFemmes:[data.foundMosque.sallePriereFemmes],
          mosqueeSallePriere:[data.foundMosque.mosqueeSallePriere],
          fermetureExeptionnelle:[data.foundMosque.fermetureExeptionnelle],
          telephone:[data.foundMosque.telephone],
          telephone1:[data.foundMosque.telephone1],
          ouvertureMosquee:[data.foundMosque.ouvertureMosquee],
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




