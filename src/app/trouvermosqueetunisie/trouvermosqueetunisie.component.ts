import { Component, OnInit, AfterViewInit, Input, AfterViewChecked, AfterContentInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import * as L from 'leaflet';
import "leaflet.markercluster";
import { latLng, MapOptions, tileLayer, Map, Marker, icon, Control, LocationEvent} from 'leaflet';
import { ApiserviceService } from '../shared/apiservice.service';
import { Mosquee } from './mosquee';
declare const PrayTimes:any

@Component({
  selector: 'app-trouvermosqueetunisie',
  templateUrl: './trouvermosqueetunisie.component.html',
  styleUrls: ['./trouvermosqueetunisie.component.css']
})
export class TrouvermosqueetunisieComponent implements OnInit, AfterViewChecked {

  mosque: Mosquee;
  fa;
  sun;
  dh;
  asr;
  mg;
  sha;
  d= new Date();
  public location = 'No Data'

 // Open Street Map Definition
  LAYER_OSM = {
    id: "openstreetmap",
    name: "Open Street Map",
    enabled: false,
    layer: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        minZoom: 6,
        maxZoom: 30,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
  };

  // Values to bind to Leaflet Directive
layersControlOptions = { position: "bottomright" as "bottomright" };
baseLayers = {"Open Street Map": this.LAYER_OSM.layer};
options = { zoom: 6.5, center: L.latLng([35.6717177907869, 9.433723834729976])};

// Marker cluster stuff
markerCluster: L.MarkerCluster;
markerClusterGroup: L.MarkerClusterGroup;
markerClusterData: any[] = [];
markerClusterOptions: L.MarkerClusterGroupOptions;
test1:string;


  mosquees;
  map;
  name: any;
  adresse: any;
  p : number = 1;
  code:any="af"
  displayedColumns : string[] = ['id', 'name', 'adresse', 'informations']
  smallIcon = new L.Icon({
    iconUrl: 'assets/images/iconMosque.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  });



  constructor(private httpService:ApiserviceService,
    private router: Router,private zone: NgZone) {
      this.mosque = {} as Mosquee;
      }


  ngOnInit(): void {
    console.log(this.mosque)
   this.httpService.getMosquees(this.code).subscribe(
      res=> {
         this.mosquees = res;
         console.log(this.mosquees)
      //   console.log(this.mosquees);
      },
      err =>{alert("An error has occurred while downloading the Mosques")}
    );

  }


    ngAfterViewChecked(): void {
      this.generateData();

    }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;

  }

  generateData() {
    const data: any[] = [];
    //console.log(this.mosquees);
    if(this.mosquees){
    for (var property of this.mosquees) {
      const icon = L.icon({
        iconUrl: 'assets/images/iconMosque.png',
        iconSize:    [25, 41],
        iconAnchor:  [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        shadowSize:  [41, 41]
      });
      //data.push(L.marker([Number(property.lat), Number(property.lng)], { icon }));
  // this.markerClusterGroup.addLayer(L.marker([Number(property.lat), Number(property.lng)], { icon }).bindPopup(property.nomMosquee+" "+property.adresse).openPopup());

    this.markerClusterGroup.addLayer(L.marker([Number(property.lat), Number(property.lng)], { icon }).on('click', e=> {

     this.zone.run(()=>{
      this.onMapClick(e);
     });
     }))
    }}
   // this.baseLayers.

    this.markerClusterData = data;

    //console.log(data);


  }

   onMapClick(e) {

    const result = this.mosquees.find( ({ lat , lng}) => lat == e.latlng.lat && lng == e.latlng.lng );
    this.mosque = result;
    console.log(this.mosque);

    var PT = new PrayTimes('MWL');
    var times = PT.getTimes(new Date(), [this.mosque.lat, this.mosque.lng],+1);
      this.fa = times.fajr;
      this.sun = times.sunrise;
      this.dh = times.dhuhr;
      this.asr = times.asr;
      this.mg = times.maghrib;
      this.sha = times.isha;

}

onNewLocation(location: LocationEvent){
  this.location=location.latlng.toString();
}

  createMap(){
    //centre map
    const cherCoo = {
      lat: 35.03747670486944,
      lng:  9.466358329345258
    };

    const zoomLevel = 6.5;

    this.map = L.map('mapp', {
      center: [cherCoo.lat, cherCoo.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 6,
      maxZoom: 20,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
   // this.addMarkers();
    // this.debug();
    //this.addMarkers();
   /* const marker1 = L.marker([36.7967924, 10.1676595], { icon: this.smallIcon });
    const marker2 = L.marker([36.7982422, 10.1703281], { icon: this.smallIcon });
    const marker3 = L.marker([36.8042039, 10.1684874], { icon: this.smallIcon });
    marker1.addTo(this.map).bindPopup("hhhhhhhhhhhh").openPopup();
    marker2.addTo(this.map).bindPopup("hihhihihihihihi").openPopup();
    marker3.addTo(this.map).bindPopup("hohohohohohoo").openPopup();*/



}

tt(){
  this.mosque;
  alert(this.mosque)

}
  addMarker(coords, text, open) {

    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    if (open) {
      marker.addTo(this.map).bindPopup(text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
  }
   debug(){
      this.mosquees.forEach( (value) => {
      const c = {
      lat: value.lat,
      lng: value.lng,
      };
      const marker = L.marker([value.lat, value.lng], { icon: this.smallIcon });
      if (true) {
        marker.addTo(this.map).bindPopup(value.name).openPopup();
        console.log(c);
      } else {
        marker.addTo(this.map).bindPopup(value.name);
      }
    });
   }
   addMarkers(){
   for (var property of this.mosquees) {
   const c = {
    lat: property.lat,
    lng: property.lng,
    };
    this.addMarker(c,property.name+" "+property.adresse,false);

    }
  }

  customizeMarkers(){

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.mosquees.filter = filterValue.trim().toLowerCase();
  }

  public doFilter = (value: string) => {
    this.mosquees.filter = value.trim().toLocaleLowerCase();
  }

 afficheMosque(): void{
    this.addMarkers();
  }

  fullscreenMosque(idm){
    this.router.navigate(['/fullscreenmosque', idm]);
  }

  Search(){
       if(this.adresse == ""){
         this.ngOnInit();
       } else {
         this.mosquees = this.mosquees.filter(res =>{
           return res.adresse.toLocaleLowerCase().match(this.adresse.toLocaleLowerCase())
         })
       }
    }

    key: string = 'name';
    reverse : boolean = false;
    sort(key){
     this.key = key;
     this.reverse = !this.reverse;
    }



    gotoMosque(mos){
      var x = {
        lat: mos.lat,
        lng: mos.lng,
        };
      this.addMarker(x,mos.name,true);

    }

    infoplus(idm)
    {


     }

      getMosqueById(idm){
        this.httpService.getMosqueById(idm,"af").subscribe(
          res=> {
            this.mosque = res;

                    var PT = new PrayTimes('MWL');
        var times = PT.getTimes(new Date(), [this.mosque.lat, this.mosque.lng],+1);
          this.fa = times.fajr;
          this.sun = times.sunrise;
          this.dh = times.dhuhr;
          this.asr = times.asr;
          this.mg = times.maghrib;
          this.sha = times.isha;

          },
          err =>{alert("An error has occurred while downloading this Mosque")}
        );

      // this.awkat()
      }

      revendiquer(idm){
        this.router.navigate(['/revendiquermosque', idm]);

          }

}

