import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit  {


  description:any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    var number = this.route.config.length
    this.description=this.route.config[number - 1]  
    
  }
 
}
