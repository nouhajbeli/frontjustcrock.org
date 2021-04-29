import { Component, HostListener, OnInit } from '@angular/core';
import { HijriDate } from 'hijri-date';
import { MatTableDataSource} from '@angular/material/table';
declare const PrayTimes:any


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  d = new Date()
  public latUser;
  public lngUser;
  public place;
  today: number = Date.now();
  mosque_height = 500;
  mosque_cellwidth = 350;
  commerce_height = 500;
  commerce_cellwidth = 700;
  loopCells = true;
  public screenWidth: any;
  public screenHeight: any;
  villes = [
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
  keyword = 'name';

  constructor() { }

  ngOnInit(): void {
    this.getLocation();
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if (window.innerWidth > 480) {
      this.mosque_cellwidth = 480;
    } else this.mosque_cellwidth = 350;
    this.screenHeight = window.innerHeight;
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if (position) {
        //  console.log("Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude);
          this.latUser = position.coords.latitude;
          this.lngUser = position.coords.longitude;
         // this.place = position.timestamp;
        }
      },
        error => alert(error.message));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  fajerTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng],'auto');
    return times.fajr;
  }
  sunriseTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng],'auto');
    return times.sunrise;
  }
  dhuhrTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng],'auto');
    return times.dhuhr;
  }
  asrTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng],'auto');
    return times.asr;
  }
  maghribTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng],'auto');
    return times.maghrib;
  }
  ishaTime(lat,lng){
    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [lat,lng],'auto');
    return times.isha;
  }


  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // do something when input is focused
  }


}
