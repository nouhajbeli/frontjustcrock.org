import { Component, OnInit } from '@angular/core';
import { Mosquee } from 'src/app/trouvermosqueetunisie/mosquee';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../shared/apiservice.service';
import { FileUploader } from 'ng2-file-upload';
import {Location} from '@angular/common';

@Component({
  selector: 'app-revendiquermosque',
  templateUrl: './revendiquermosque.component.html',
  styleUrls: ['./revendiquermosque.component.css']
})
export class RevendiquermosqueComponent implements OnInit {

  mosqueForm: FormGroup;
  mosque: Mosquee;
  idm;
  submitted = false;
  files: any = [];
  store: any = [];
  isLoading: boolean = false;
  isSent: boolean = false;
  emailForm: any;
  userSelected: any;
  isOk:string;
  fileOk:string;
  public uploader2:FileUploader = new FileUploader({
    isHTML5: true
  });

  constructor(private httpService:ApiserviceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location) { }

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      association: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      president: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      prenom: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      adresse: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      telephone: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      piece: new FormControl(null, Validators.required),

    });


    this.idm = this.route.snapshot.params.idm;
    this.getMosque(this.idm,'af');

  }
  get f() { return this.emailForm.controls; }

  getMosque(mId: string,code) {

    this.httpService.getMosqueById(mId,code).subscribe( (res:any)=> {
      this.mosque = res.foundMosque;
      console.log(this.mosque);
    },
      err =>{alert("An error has occurred while downloading mosque")}
    );
  }

sendMail() {
  this.submitted = true;
  console.log(this.emailForm.value)
  // stop here if form is invalid
  if (this.emailForm.invalid) {
    console.log('error')
    this.fileOk = 'false';
      return;
  }

  for (let i = 0; i < this.uploader2.queue.length; i++) {
    let fileItem = this.uploader2.queue[i]._file;
    if(fileItem.size > 90000000){
      alert("Taille du fichier doit être inférieure à  90 MB.");
      return;
    }
    console.log(this.uploader2.queue[i]._file)
  }
  let files : any = [];
  for (let j = 0; j < this.uploader2.queue.length; j++) {

    let data = new FormData();
    let fileItem = this.uploader2.queue[j]._file;
    if(fileItem.type == 'application/pdf' || fileItem.type == 'image/png' || fileItem.type == 'image/jpeg' ){
     this.fileOk = '';
    }else{
      this.fileOk = 'false'
      return;
    }
    data.append('files', fileItem);
    data.append('fileSeq', 'seq'+j);

    files.push(fileItem)
  }

  let data = new FormData();
  data.append('files',files)
  data.append('email',this.emailForm.value.email)
  data.append('association',this.emailForm.value.association)
  data.append('president',this.emailForm.value.president)
  data.append('prenom',this.emailForm.value.prenom)
  data.append('adresse',this.emailForm.value.adresse)
  data.append('telephone',this.emailForm.value.telephone)

  this.httpService.revendiquer(data).subscribe(data=>{
    console.log(data)
    this.isOk = 'true'
    this.fileOk = '';
  },err =>{
    console.log(err)
    this.isOk = 'false'
  })
  this.uploader2.clearQueue();

}

retour(){
  this._location.back();
}
}
