import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../shared/apiservice.service';
import {FormControl, Validators} from '@angular/forms';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-quranecrit',
  templateUrl: './quranecrit.component.html',
  styleUrls: ['./quranecrit.component.css']
})
export class QuranecritComponent implements OnInit {
  quranControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  //juzControl = new FormControl('', Validators.required);
   quran;
   soura;
   souraName;
   souraMP3;
   souraMP3C;
   chemin;
   aff;
   langue="Aucun";
msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;
msaapDisplayRepeatControls = true;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;
pageSizeOptions;

// Material Style Advance Audio Player Playlist
ajmyPlaylist: Track[] = [
  {
    title: 'Al-Fatiha',
    link: 'assets/audio/001.mp3'
  },
  {
    title: 'Al-Baiyyinah',
    link: 'assets/audio/098.mp3'
  },
  {
    title: 'Az-Zalzalah',
    link: 'assets/audio/099.mp3'
  },
  {
    title: 'Al-\'Adiyat',
    link: 'assets/audio/100.mp3'
  },
  {
    title: 'Al-Qari\'ah',
    link: 'assets/audio/101.mp3'
  },
  {
    title: 'At-Takathur',
    link: 'assets/audio/102.mp3'
  },
  {
    title: 'Al-\'Asr',
    link: 'assets/audio/103.mp3'
  },
  {
    title: 'Al-Humazah',
    link: 'assets/audio/104.mp3'
  },
  {
    title: 'Al-Fil',
    link: 'assets/audio/105.mp3'
  },
  {
    title: 'Quraish',
    link: 'assets/audio/106.mp3'
  },
  {
    title: 'Al-Ma\'un',
    link: 'assets/audio/107.mp3'
  },
  {
    title: 'Al-Kauthar',
    link: 'assets/audio/108.mp3'
  },
  {
    title: 'Al-Kafirun',
    link: 'assets/audio/109.mp3'
  },
  {
    title: 'An-Nasr',
    link: 'assets/audio/110.mp3'
  },
  {
    title: 'Al-Masad',
    link: 'assets/audio/111.mp3'
  },
  {
    title: 'Al-Ikhlas',
    link: 'assets/audio/112.mp3'
  },
  {
    title: 'Al-Falaq',
    link: 'assets/audio/113.mp3'
  },
  {
    title: 'An-Nas',
    link: 'assets/audio/114.mp3'
  }
];
  constructor(private httpService:ApiserviceService) { }

  aj = this.ajmyPlaylist
  ngOnInit(): void {
    this.httpService.getQuranecrit().subscribe(
      res=> {
        this.quran = res;
      },
      err =>{alert("An error has occurred while downloading the Mosques")}
    );
  }



  getSoura(ver){
    console.log(ver);
    this.soura=ver.versets;
    this.souraName=ver;
    this.souraMP3=ver.position;
    console.log(this.souraMP3);
    this.aff=true;
   this.souraMP3C = this.convertNumber(this.souraMP3);
    console.log(this.langue);
  }

  convertNumber(x){
   if(x<10)
   return '00'+x;
   else if (x>9 && x<100)
   return '0'+x;
   else return x;
  }




}
