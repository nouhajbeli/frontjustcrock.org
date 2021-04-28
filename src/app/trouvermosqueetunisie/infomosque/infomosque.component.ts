import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../../shared/apiservice.service';
import { Mosquee } from '../mosquee';
import { MatDialog } from '@angular/material/dialog';
declare const PrayTimes:any


@Component({
  selector: 'app-infomosque',
  templateUrl: './infomosque.component.html',
  styleUrls: ['./infomosque.component.css']
})
export class InfomosqueComponent implements OnInit, AfterViewInit {
  mosque: Mosquee;
  fa;
  dh;
  asr;
  mg;
  sha;
  constructor(public dialog: MatDialog,
    private httpService:ApiserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const mId = params.get('idm')
      this.getMosqueById(mId)
    });
  }

  ngAfterViewInit(): void {
    this.awkat();
  }

  getMosqueById(idm){
    this.httpService.getMosqueById(idm,"af").subscribe(
      res=> {
        this.mosque = res;
      },
      err =>{alert("An error has occurred while downloading the Mosques")}
    );

   // this.awkat()
  }

  btnClick () {
    this.router.navigateByUrl('/touvermosqueetunisie');
}

awkat(){

  var PT = new PrayTimes('MWL');
  var times = PT.getTimes(new Date(), [this.mosque.lat, this.mosque.lng], +1);
    this.fa = times.fajr;
    this.dh = times.dhuhr;
    this.asr = times.asr;
    this.mg = times.maghrib;
    this.sha = times.isha;

}

/*openDialog() {
  const dialogRef = this.dialog.open(ConditiongeneraleComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}*/


editMosque(idm)
{
  this.router.navigate(['/infomosque/revendiquermosque', idm]);
}

}
