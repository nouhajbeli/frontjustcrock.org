import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../shared/apiservice.service';
import { Mosquee } from './mosquee.model';

@Component({
  selector: 'app-mosque-details',
  templateUrl: './mosque-details.component.html',
  styleUrls: ['./mosque-details.component.css']
})
export class MosqueDetailsComponent implements OnInit {
mosquee:Mosquee
id:any
code:any
  constructor( private router : Router,private MosqueService:ApiserviceService,private activateroute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id= this.activateroute.snapshot.params.id;
    this.code= this.activateroute.snapshot.params.code;

    this.MosqueService.getMosqueById(this.id,this.code).subscribe((data:any)=>{
          this.mosquee=data
      if(this.mosquee.imageUrl===null){
        this.mosquee.imageUrl="https://res.cloudinary.com/dtl8igxn0/image/upload/v1618913260/icons_mosque_vide_gcujgn.svg"
      }else {
        this.mosquee.imageUrl
      }

    })
  }

}
