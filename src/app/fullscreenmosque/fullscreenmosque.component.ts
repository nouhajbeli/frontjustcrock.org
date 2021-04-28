import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../shared/apiservice.service';
import { Mosquee } from '../trouvermosqueetunisie/mosquee';
import * as L from 'leaflet';

@Component({
  selector: 'app-fullscreenmosque',
  templateUrl: './fullscreenmosque.component.html',
  styleUrls: ['./fullscreenmosque.component.css']
})
export class FullscreenmosqueComponent implements OnInit, AfterViewChecked {
  map;
  id;
  mosque;
  latM;
  lngM;

  LAYER_OSM = {
    id: "openstreetmap",
    name: "Open Street Map",
    enabled: false,
    layer: L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      minZoom: 6,
      maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })
};

// Values to bind to Leaflet Directive
layersControlOptions = { position: "bottomright" as "bottomright" };
baseLayers = {"Open Street Map": this.LAYER_OSM.layer};
options = {
zoom: 6.5,
center: L.latLng([35.6717177907869, 9.433723834729976])
};

  // Marker cluster stuff
  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: any[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  constructor(private httpService:ApiserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.idm;
    this.getMosqueById(id);
  }
  ngAfterViewChecked(): void {
    this.generateData();
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }

  getMosqueById(idm){
    this.httpService.getMosqueById(idm,"af").subscribe(
      res=> {
        this.mosque = res;
        console.log(this.mosque.name);
        console.log(this.mosque.lng);
        this.latM = this.mosque.lat;
        console.log(this.mosque.lat);
        this.lngM = this.mosque.lng;

      },
      err =>{alert("An error has occurred while downloading the Mosques")}
    );
  }



  generateData() {
    const data: any[] = [];
    const icon = L.icon({
      iconUrl: 'assets/images/iconMosque.png',
      iconSize:    [25, 41],
      iconAnchor:  [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      shadowSize:  [41, 41]
    });

      data.push(L.marker([this.mosque.lat, this.mosque.lng], { icon }).bindPopup(this.mosque.name+" "+this.mosque.adresse).openPopup());


    this.markerClusterData = data;
  }

}
