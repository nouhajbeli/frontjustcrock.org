import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
declare const PrayTimes:any
export interface ville {
  name: string;
  latitude: number;
  longitude: number;
}



const ELEMENT_DATA: ville[] = [
  { name: 'Tunis', latitude: 37.113181407318514, longitude: 10.203592500777265},
  { name: 'Ben Arous', latitude: 36.815804428213724, longitude: 10.20561334581364},
  { name: 'Manouba', latitude: 36.89944361347399, longitude: 10.080639806468046},
  { name: 'Ariana', latitude: 36.94039962479642,  longitude: 10.126364571195175},
  { name: 'Bizerte', latitude: 37.29878301548235, longitude: 9.864213896809456},
  { name: 'Jendouba', latitude: 36.56859352864455, longitude: 8.774977180802836},
  { name: 'Beja', latitude: 36.72556004990505, longitude: 9.18384921185885},
  { name: 'Zaghouan', latitude: 36.46175829578253, longitude: 10.149348876032848},
  { name: 'Nabeul', latitude: 36.480380343350824, longitude: 10.732701750414293},
  { name: 'Siliana', latitude: 36.12052376033101, longitude: 9.360123436231916},
  { name: 'El Kef', latitude: 36.19655980857592, longitude: 8.70356564493437},
  { name: 'Kasserine', latitude: 35.216230182349136, longitude: 8.834996862539713},
  { name: 'Sidi Bouzid', latitude: 35.06502705647758, longitude: 9.47881416588267},
  { name: 'Kairouan', latitude: 35.70392910213436, longitude: 10.099373261981508},
  { name: 'Sousse', latitude: 35.865228852033475, longitude: 10.629333114983805},
  { name: 'Monastir', latitude: 35.798993185496286, longitude: 10.807405697525727},
  { name: 'Mahdia', latitude: 35.52670059464817, longitude: 11.043908500545935},
  { name: 'Sfax', latitude: 34.83074350768473, longitude: 10.741352313101297},
  { name: 'Gabes', latitude: 33.90569876788233, longitude: 10.095156344560904},
  { name: 'Gafsa', latitude: 34.483126062770474, longitude: 8.781329378120821},
  { name: 'Tozeur', latitude: 33.984064873811306, longitude: 8.118866473052567},
  { name: 'Kebili', latitude: 33.74826183752659, longitude: 8.970988248507664},
  { name: 'Medenine', latitude: 33.40221872987112, longitude: 10.497619168025338},
  { name: 'Tataouine', latitude: 32.96422659582705, longitude: 10.451466854896026},
];

@Component({
  selector: 'app-tempspriere',
  templateUrl: './tempspriere.component.html',
  styleUrls: ['./tempspriere.component.css']
})
export class TempspriereComponent implements OnInit {
  fa;
  dh;
  asr;
  mg;
  sha;
  d = new Date();
  villes= [
  { name: 'Tunis', latitude: 37.113181407318514, longitude: 10.203592500777265},
  { name: 'Ben Arous', latitude: 36.815804428213724, longitude: 10.20561334581364},
  { name: 'Manouba', latitude: 36.89944361347399, longitude: 10.080639806468046},
  { name: 'Ariana', latitude: 36.94039962479642,  longitude: 10.126364571195175},
  { name: 'Bizerte', latitude: 37.29878301548235, longitude: 9.864213896809456},
  { name: 'Jendouba', latitude: 36.56859352864455, longitude: 8.774977180802836},
  { name: 'Beja', latitude: 36.72556004990505, longitude: 9.18384921185885},
  { name: 'Zaghouan', latitude: 36.46175829578253, longitude: 10.149348876032848},
  { name: 'Nabeul', latitude: 36.480380343350824, longitude: 10.732701750414293},
  { name: 'Siliana', latitude: 36.12052376033101, longitude: 9.360123436231916},
  { name: 'El Kef', latitude: 36.19655980857592, longitude: 8.70356564493437},
  { name: 'Kasserine', latitude: 35.216230182349136, longitude: 8.834996862539713},
  { name: 'Sidi Bouzid', latitude: 35.06502705647758, longitude: 9.47881416588267},
  { name: 'Kairouan', latitude: 35.70392910213436, longitude: 10.099373261981508},
  { name: 'Sousse', latitude: 35.865228852033475, longitude: 10.629333114983805},
  { name: 'Monastir', latitude: 35.798993185496286, longitude: 10.807405697525727},
  { name: 'Mahdia', latitude: 35.52670059464817, longitude: 11.043908500545935},
  { name: 'Sfax', latitude: 34.83074350768473, longitude: 10.741352313101297},
  { name: 'Gabes', latitude: 33.90569876788233, longitude: 10.095156344560904},
  { name: 'Gafsa', latitude: 34.483126062770474, longitude: 8.781329378120821},
  { name: 'Tozeur', latitude: 33.984064873811306, longitude: 8.118866473052567},
  { name: 'Kebili', latitude: 33.74826183752659, longitude: 8.970988248507664},
  { name: 'Medenine', latitude: 33.40221872987112, longitude: 10.497619168025338},
  { name: 'Tataouine', latitude: 32.96422659582705, longitude: 10.451466854896026}
  ]



  affiche:boolean=false;
  public latUser;
  public lngUser;
  public place;
  today: number = Date.now();

  constructor() { }

  ngOnInit(): void {
    this.getLocation();
    //this.prayClick();
  }


  displayedColumns: string[] = ['name', 'Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }





  prayClick(){

    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [51.5300167099445, -0.12086054834222958],this.d.getTimezoneOffset());
    this.fa = times.fajr;
    this.dh = times.dhuhr;
    this.asr = times.asr;
    this.mg = times.maghrib;
    this.sha = times.isha;
    console.log(times.fajr);
    console.log(times.dhuhr);
    console.log(times.asr);
    console.log(times.maghrib);
    console.log(times.isha);
  }

  fajerTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng], this.d.getTimezoneOffset());
    return times.fajr;
  }
  dhuhrTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng], this.d.getTimezoneOffset());
    return times.dhuhr;
  }
  asrTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng], this.d.getTimezoneOffset());
    return times.asr;
  }
  maghribTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng], this.d.getTimezoneOffset());
    return times.maghrib;
  }
  ishaTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng], this.d.getTimezoneOffset());
    return times.isha;
  }


  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if (position) {
         // console.log("Latitude: " + position.coords.latitude+" Longitude: " + position.coords.longitude);
          this.latUser = position.coords.latitude;
          this.lngUser = position.coords.longitude;
          this.place = position.timestamp;
          this.affiche=true;
        //  console.log(this.latUser);
        // console.log(this.lngUser);
        // console.log(this.place);
        }
      },
        error => alert(error.message));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

}
