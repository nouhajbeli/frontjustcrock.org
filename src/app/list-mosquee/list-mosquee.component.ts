import { Component, OnInit,Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { DetailsComponent } from './details/details.component';
import { ListeMosqueeService } from './liste-mosquee.service';

import { ApiserviceService } from '../shared/apiservice.service';
@Component({
  selector: 'app-list-mosquee',
  templateUrl: './list-mosquee.component.html',
  styleUrls: ['./list-mosquee.component.css']
})
export class ListMosqueeComponent implements OnInit {
  @Input() listeMosquee:Object[];

  description:any;
  p: number = 1;
  userFilter: any = { adresse: '' };
  mosquees:any;
  videMosque:any="https://res.cloudinary.com/dtl8igxn0/image/upload/v1618913260/icons_mosque_vide_gcujgn.svg"
code:any="af"
  constructor(public dialog: MatDialog,
              private router:Router,
              private _service:ApiserviceService,private userService:UserService)
              {}

  ngOnInit() {
    this.getAllMosquee(this.code);
  }
  onSelectC(event:any){

    this.code=event.target.value

      }






  getAllMosquee(code:any){

    this._service.getMosquees(code).subscribe(
      (data:any)=>{
        this.mosquees = data;
        for(var ele of this.mosquees){
          if(ele.imageUrl===null){
            ele.imageUrl="https://res.cloudinary.com/dtl8igxn0/image/upload/v1618913260/icons_mosque_vide_gcujgn.svg"
          }else {
            ele.imageUrl
          }
        }
         })
  }
  details(id:any){
    this.router.navigate(['/mosqueDetails',{id:id,code:this.code}])
  }

}
