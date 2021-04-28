import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Recitateur } from './recitateurs.model';
import { Track } from 'ngx-audio-player';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-recitateurs',
  templateUrl: './recitateurs.component.html',
  styleUrls: ['./recitateurs.component.css']
})
export class RecitateursComponent implements OnInit {
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
juhaniPlaylist: Track[] = [
  {
    title: 'Al-Fatiha',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181318/juhani/001_qudvxa.mp3'
  },
  {
    title: 'Al-Baiyyinah',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181321/juhani/098_zqmyel.mp3'
  },
  {
    title: 'Az-Zalzalah',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181319/juhani/099_k1pqkn.mp3'
  },
  {
    title: 'Al-\'Adiyat',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181319/juhani/100_ivp7vc.mp3'
  },
  {
    title: 'Al-Qari\'ah',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181319/juhani/101_eho5h8.mp3'
  },
  {
    title: 'At-Takathur',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181319/juhani/102_o6vx9v.mp3'
  },
  {
    title: 'Al-\'Asr',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181320/juhani/103_jupyxb.mp3'
  },
  {
    title: 'Al-Humazah',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181320/juhani/104_rcyc1d.mp3'
  },
  {
    title: 'Al-Fil',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181321/juhani/105_d6gash.mp3'
  },
  {
    title: 'Quraish',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181321/juhani/106_ff18a7.mp3'
  },
  {
    title: 'Al-Ma\'un',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181321/juhani/107_tzpdoy.mp3'
  },
  {
    title: 'Al-Kauthar',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181321/juhani/108_sdha56.mp3'
  },
  {
    title: 'An-Nasr',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181322/juhani/110_us4t7o.mp3'
  },
  {
    title: 'Al-Masad',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181322/juhani/111_xje4cv.mp3'
  },
  {
    title: 'Al-Ikhlas',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181322/juhani/112_cggniu.mp3'
  },
  {
    title: 'Al-Falaq',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181322/juhani/113_weqfjr.mp3'
  },
  {
    title: 'An-Nas',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181323/juhani/114_bbyhpe.mp3'
  }
];
 ghamidyPlaylist: Track[] = [
  {
    title: 'Al-Fatiha',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181504/saad/001_qsvvzc.mp3'
  }
];
abdelbassetPlaylist:Track[]=[
  {
    title: 'Al-Fatiha',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182314/abdelbasset/001_wcxwtm.mp3'
  },
  {
    title: 'Al-Baqara',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182523/abdelbasset/002_zis3d9.mp3'
  },
  {
    title: 'Al-Imran',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182511/abdelbasset/003_amhfb6.mp3'
  },
  {
    title: 'An-Nisa',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182521/abdelbasset/004_qzofqa.mp3'
  }
  ,
  {
    title: 'Al Ma-ida ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182358/abdelbasset/005_pup40n.mp3'
  }
  ,
  {
    title: 'Al An-am  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182511/abdelbasset/006_e6nu6j.mp3'
  }
  ,
  {
    title: 'Al A-raf  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182522/abdelbasset/007_argfci.mp3'
  }
  ,
  {
    title: 'Al-Anfal  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182375/abdelbasset/008_w45g5i.mp3'
  }
  ,
  {
    title: 'At-Tawba ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182377/abdelbasset/009_i59jwe.mp3'
  }
  ,
  {
    title: 'Yunus ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182393/abdelbasset/010_wuekcm.mp3'
  }
  ,
  {
    title: 'Hud',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182419/abdelbasset/011_atsxzx.mp3'
  }
  ,
  {
    title: 'Yusuf ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182402/abdelbasset/012_ezmamb.mp3'
  }
  ,
  {
    title: ' Ar-Ra-d  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182386/abdelbasset/013_dsklrk.mp3'
  }
  ,
  {
    title: ' Ibrahim  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182386/abdelbasset/014_iqsjyh.mp3'
  }
  ,
  {
    title: ' Al Hijr  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182388/abdelbasset/015_uvrvtd.mp3'
  }
  ,
  {
    title: 'An-Nahl  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182400/abdelbasset/016_yzip5l.mp3'
  }
]
boukhaterPlaylist:Track[]=[
  {
    title: 'Al-Fatiha',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181581/boukhatir/001_b3sg8e.mp3'
  },

  {
    title: 'Al-Imran',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182007/boukhatir/003_ji7hca.mp3'
  },
  {
    title: 'An-Nisa',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182008/boukhatir/004_rxrrxv.mp3'
  }
  ,
  {
    title: 'Al Ma-ida ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181997/boukhatir/005_kb7k2x.mp3'
  }
  ,
  {
    title: 'Al An-am  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182000/boukhatir/006_xqs7oq.mp3'
  }
  ,
  {
    title: 'Al A-raf  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182004/boukhatir/007_m4wftq.mp3'
  }
  ,
  {
    title: 'Al-Anfal  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181690/boukhatir/008_ce0sag.mp3'
  }
  ,
  {
    title: 'At-Tawba ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181994/boukhatir/009_t5ajje.mp3'
  }
  ,
  {
    title: 'Yunus ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181709/boukhatir/010_gsfwtr.mp3'
  }
  ,
  {
    title: 'Hud',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181790/boukhatir/011_rfnhuy.mp3'
  }
  ,
  {
    title: 'Yusuf ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181777/boukhatir/012_o7xllz.mp3'
  }
  ,
  {
    title: ' Ar-Ra-d  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181734/boukhatir/013_tlagxs.mp3'
  }
  ,
  {
    title: ' Ibrahim  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181770/boukhatir/014_f9rsyn.mp3'
  }
  ,
  {
    title: ' Al Hijr  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181766/boukhatir/015_atqfhg.mp3'
  }
  ,
  {
    title: 'An-Nahl  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617181788/boukhatir/016_rmvw1t.mp3'
  }
]
AjmiPlaylist:Track[]=[
  {
    title: 'Al-Fatiha',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182737/alAjmi/001_q6ibo0.mp3'
  },

  {
    title: 'Al-Anfal  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182773/alAjmi/008_towsme.mp3'
  }
  ,

  {
    title: 'Yunus ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182816/alAjmi/010_h2bnp9.mp3'
  }
  ,
  {
    title: 'Hud',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182830/alAjmi/011_p8juer.mp3'
  }
  ,
  {
    title: 'Yusuf ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182831/alAjmi/012_ueughs.mp3'
  }
  ,
  {
    title: ' Ar-Ra-d  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182807/alAjmi/013_i9duoq.mp3'
  }
  ,
  {
    title: ' Ibrahim  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182830/alAjmi/014_okgjab.mp3'
  }
  ,
  {
    title: ' Al Hijr  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182830/alAjmi/015_dnllp1.mp3'
  }
  ,
  {
    title: 'An-Nahl  ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617182834/alAjmi/016_dsknno.mp3'
  }
]
FaresPlaylist:Track[]=[
  {
    title: 'Al-Fatiha',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187838/fares/001_kndjyw.mp3'
  },

  {
    title: 'Al-Imran',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187869/fares/003_vdwsmn.mp3'
  },
  {
    title: 'An-Nisa',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187871/fares/004_fblojt.mp3'
  }
  ,
  {
    title: 'Al Ma-ida ',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187862/fares/005_vxvdfy.mp3'
  }
 ]
 bandarPlaylist:Track[]=[
  {
    title: 'Al-Fatiha',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187701/bandar/001_lhdabe.mp3'
  },

   ]
   khaledPlaylist:Track[]=[
    {
      title: 'Al-Fatiha',
      link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617202752/khalid al ghamidi/001_ocysle.mp3'
    },

     ]
   basfarPlaylist:Track[]=[
    {
      title: 'Al-Fatiha',
      link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187937/basfar/001_nqxq4g.mp3'
    },

  {
    title: 'Al-Baqara',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187990/basfar/002_bjk2mq.mp3'
  },
  {
    title: 'Al-Imran',
    link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187971/basfar/003_aykp5m.mp3'
  },

     ]
     hanifPlaylist:Track[]=[
      {
        title: 'Al-Fatiha',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617186961/abdelwadoud/001_tkl6rv.mp3'
      },
      {
        title: 'Al-Baqara',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187213/abdelwadoud/002_re1epb.mp3'
      },
      {
        title: 'Al-Imran',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187215/abdelwadoud/003_s4bf3o.mp3'
      },
      {
        title: 'An-Nisa',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187211/abdelwadoud/004_o9v3kv.mp3'
      }
      ,
      {
        title: 'Al Ma-ida ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617186998/abdelwadoud/005_vpkjud.mp3'
      }
      ,
      {
        title: 'Al An-am  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187198/abdelwadoud/006_utojd6.mp3'
      }
      ,
      {
        title: 'Al A-raf  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187201/abdelwadoud/007_uaj52q.mp3'
      }
      ,
      {
        title: 'Al-Anfal  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187007/abdelwadoud/008_mggewu.mp3'
      }
      ,

      {
        title: 'Yunus ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187041/abdelwadoud/010_iwyblm.mp3'
      }
      ,
      {
        title: 'Hud',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187014/abdelwadoud/011_pn6cbj.mp3'
      }
      ,
      {
        title: 'Yusuf ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187102/abdelwadoud/012_og7wxp.mp3'
      }
      ,
      {
        title: ' Ar-Ra-d  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187133/abdelwadoud/013_b4mxzi.mp3'
      }
      ,
      {
        title: ' Ibrahim  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187041/abdelwadoud/014_edwv0h.mp3'
      }
      ,
      {
        title: ' Al Hijr  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617187100/abdelwadoud/015_szytjq.mp3'
      }

    ]

    houdaifiPlaylist:Track[]=[
      {
        title: 'Al-Fatiha',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216869/houdaify/001_qubf9s.mp3'
      },
      {
        title: 'Al-Baqara',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617217060/houdaify/002_ozk2mk.mp3'
      },
      {
        title: 'Al-Imran',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617217036/houdaify/003_u0mkuz.mp3'
      },
      {
        title: 'An-Nisa',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617217037/houdaify/004_uidcjq.mp3'
      }
      ,
      {
        title: 'Al Ma-ida ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617217031/houdaify/005_orini0.mp3'
      }
      ,
      {
        title: 'Al An-am  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617217031/houdaify/006_ixt3wd.mp3'
      }
      ,
      {
        title: 'Al A-raf  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617217034/houdaify/007_fmcmkx.mp3'
      }
      ,
      {
        title: 'Al-Anfal  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216952/houdaify/008_fw1n0k.mp3'
      }
      ,
      {
        title: 'At-Tawba ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617217027/houdaify/009_zmguwf.mp3'
      }
      ,
      {
        title: 'Yunus ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216952/houdaify/010_kd2rbz.mp3'
      }
      ,
      {
        title: 'Hud',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216971/houdaify/011_e9fyik.mp3'
      }
      ,
      {
        title: 'Yusuf ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216973/houdaify/012_z9mwt2.mp3'
      }
      ,
      {
        title: ' Ar-Ra-d  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216961/houdaify/013_xoiaxk.mp3'
      }
      ,
      {
        title: ' Ibrahim  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216963/houdaify/014_weazab.mp3'
      }
      ,
      {
        title: ' Al Hijr  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216967/houdaify/015_cfzf0g.mp3'
      }
      ,
      {
        title: 'An-Nahl  ',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617216979/houdaify/016_fc5tjd.mp3'
      }
    ]
    maherPlaylist:Track[]=[
      {
        title: 'Al-Fatiha',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617263862/maher/maher-al-mueaqly-001-al-fatiha-3083-1938_s4o2pc.mp3'
      },
      {
        title: 'Al-Baqara',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617263886/maher/maher-al-mueaqly-002-al-baqara-3066-525_ynimu2.mp3'
      },
      {
        title: 'Al-Imran',
        link: 'https://res.cloudinary.com/dtl8igxn0/video/upload/v1617264144/maher/maher-al-mueaqly-003-al-i-mran-33569-7659_ancpxr.mp3'
      }
    ]
  selectedData:Recitateur;
  loginForm:any;
  recitateurInfo='';
  recitateurInfoPlus='';
  chemin: any ;
  aff=false;
  saad=false;
  juhani=false;
  samad=false;
  maher=false;
  abdelbasset=false
  boukhater=false
  Ajmi=false
  fares=false
  bandar=false
basfar=false
khaled=false
hanif=false
houdaifi=false
  constructor(private sanitizer: DomSanitizer,private fb: FormBuilder) {
   this.selectedData = new Recitateur;
   this.loginForm = new FormGroup({

    selectedOption: new FormControl(null, Validators.required),

  });

  }

  ngOnInit() {
    this.selectedData = this.dataJson.find( (i:any) => i.id ==   1);

    for(let i =0;i<this.selectedData.urls.length;i++){
      this.selectedData.urls[i] = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedData.urls[i])
    }

    for(let i =0;i<this.selectedData.urls2.length;i++){
      this.selectedData.urls2[i] = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedData.urls2[i])
    }
  }


  onChange(idR){


    this.selectedData = this.dataJson.find( (i:any) => i.id == idR);

    for(let i =0;i<this.selectedData.urls.length;i++){
      this.selectedData.urls[i] = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedData.urls[i])
    }

    for(let i =0;i<this.selectedData.urls2.length;i++){
      this.selectedData.urls2[i] = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedData.urls2[i])
    }
  }

  affJuhani(){
    this.recitateurInfo="Cheikh Abdullah Awad Al Juhany (arabe: عبد الله عواد الجهني) est l'un des imams de la grande mosquée Masjid al-Haram à La Mecque. Il est titulaire d'un BA de la faculté du Coran de l'Université islamique de Médine et d'un doctorat (Ph.D) de l'Université Umm al-Qura à La Mecque. Juhany a dirigé les prières du Taraweeh pendant le Ramadan à La Mecque depuis 2005, et est connu pour son style de récitation coranique émotionnelle. Sa voix a été largement enregistrée et est distribuée internationalement par diverses communautés";
    this.recitateurInfoPlus="Juhany a trois frères et deux sœurs. Il est le plus jeune fils et est né à Médine, en Arabie Saoudite en 1976. Il a mémorisé le Coran à un jeune âge répondant aux souhaits de ses parents et a participé à un concours pour la mémorisation et la récitation du Coran et est arrivé premier dans sa catégorie. Il est marié, a deux fils (Muhammad, Abdul Aziz) et deux filles également."
    //  this.chemin="./../assets/audio/Juhani";
 // this.chemin = "ajmyPlaylist";
    this.aff=true;
    this.juhani=true;
    this.saad=false;
    this.maher=false;
    this.samad=false;
    this.boukhater=false
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false

  }
  affGhamidy(){
    this.recitateurInfo="Saad Al Ghamdi (en arabe: سعد الغامدي) né à Dammam, Arabie saoudite en 1967; est un récitant du Coran et un imam. Il a mémorisé tout le Coran en 1990, alors qu'il avait 22 ans. Il est souvent connu pour son célèbre Tajwid.";
    this.recitateurInfoPlus="Il a étudié la loi islamique (études islamiques) à Dammam, en particulier à l'école de la charia, source des commandements religieux musulmans. En 2012, il a été nommé Imam de la mosquée Safia Kanoo à Dammam avant d'exercer la même profession dans plusieurs mosquées à travers le monde, notamment aux États-Unis, au Royaume-Uni et en Autriche. Pendant le Ramadan 2009, Cheikh Saad Al Ghamdi était un Imam pendant la prière du Taraweeh à Al-Masjid an-Nabawi (lieu sacré de l'islam à Médine) de Médine."
    //  this.chemin="./../assets/audio/Juhani";
  //this.chemin = "ajmyPlaylist";
    this.aff=true;
    this.saad=true;
    this.juhani=false;
    this.maher=false;
    this.samad=false;
    this.boukhater=false
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false

  }

  affSamad(){
    this.recitateurInfo="Abdelbasset Abdessamad (arabe : عبد الباسط عبد الصمد), né en 1927 et mort le 30 novembre 1988 au Caire (Égypte), est un excellent Qari égyptien."
    this.recitateurInfoPlus="Qari égyptien, cheikh et imam, Abdelbasset Abdessamad était, de son vécu, considéré comme le meilleur récitateur du Coran du monde. En effet ses différentes récitations des sourates du Coran sont sublimes.  À 10 ans, il a fini d'apprendre par cœur tout le Coran. Deux ans plus tard, à l'âge de 12 ans, il maîtrise sept styles de récitation du Coran, puis, à l'âge de 14 ans, la totalité des 10 styles.  Au début des années 1970, à l'âge de 43 ans, il remporte trois compétitions mondiales de Qira'at.  Parmi les hafiz, il fut l'un des premiers à commercialiser des enregistrements de récitations coraniques. Il fut également le premier président de l'Union des récitateurs en Égypte.  Reconnu mondialement, Abdessamad est surnommé «la gorge d'or» ou encore «la voix du ciel» en raison de son style mélodieux et de son contrôle remarquable du souffle.  De nos jours, il est devenu une référence parmi l'art de la récitation coranique. Il est commun d'entendre des «imitations» d'Abdessamad."
    this.aff=true;
    this.samad=true;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false

  }

  affMaher(){
    this.recitateurInfo="Maher Ibn Hamad Ibn Mouaqil Al Balwi (en arabe ماهر المعيقلي ; né le 7 janvier 1969 à Médine) est un imam et un des plus grands récitateurs du Coran (qârî) officiant à Grande Mosquée de La Mecque, ce qui lui offre une grande célébrité même en dehors de son pays concernant sa lecture"
    this.recitateurInfoPlus="Maher Al Mueaqly étudie dans la ville de Médine.  Il y obtient un diplôme de professeur en mathématiques de la faculté des professeurs, avant d’être affecté à La Mecque à l’école Balat Achouhada.  Il devient par la suite conseiller d’orientation des étudiants à l’école du prince Abd Al Majid à La Mecque3. En 2004, il décroche un master en jurisprudence islamique (Fiqh) de la faculté Oumm al-Qura4, pour lequel il obtient la mention d'excellence. Il obtiendra son doctorat sept ans plus tard dans la même université5.  Conférencier à la faculté de charia et d'études islamiques de La Mecque, il est à partir de 2004 un imam à la mosquée Abd Arrahmane Assaâdi de la Mecque6 puis à la mosquée du noble prophète de 2005 à 2006. A partir octobre 2006, il est imam à Médine durant deux années."
    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=true;
    this.boukhater=false
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false


  }
  affboukhater(){
    this.recitateurInfo="Cheikh salah boukhater est le frère du chanteur islamique 'Ahmed Bukhater'.",


    this.recitateurInfoPlus=" La belle voix de Salah Bukhatir en récitation coranique lui permet d'enregistrer des cassettes et des disques islamiques. Sa prestation en récitation coranique ressemble à celle du réciteur saoudien 'Cheikh Sudais'. Plusieurs chaines télévisées, stations radiophoniques et sites sur internet présentent sa psalmodie. Salah Bukhatir donne des conférences concernant de nombreuses questions relatives à la religion islamique. Il est imam à la mosquée 'Cheikh Saoud Al kassimi' (Charika) où il dirige les prières de Tarawih, et à la mosquée 'Al Haram Al Madani Acharif' également."
    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=true;
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false

  }
  affAjmi(){
    this.recitateurInfo="  Cheikh Ahmad Bin Ali Al-Ajmy est l'un des récitants du Saint Coran. Il est né dans le gouvernorat d'Al Khobar en Arabie Saoudite. ",


    this.recitateurInfoPlus=" Cheikh Ahmad Al-Ajmy RÉCITATEUR DU CORAN Cheikh Ahmad Al-Ajmy Cheikh Ahmad Bin Ali Al-Ajmy est l'un des récitants du Saint Coran. Il est né dans le gouvernorat d'Al Khobar en Arabie Saoudite en 1388/1968. Il a mémorisé le Coran grâce à son père qui l'emmenait aux cours de Coran à Al-masjid Al-Haram chaque vacances d'été. Cheikh Ahmad Al-Ajmy a terminé ses études de base dans le gouvernorat d'Al khobar puis il a déménagé dans le gouvernorat d'Ehsaa pour rejoindre l'université Mohammad Bin Saud où il s'est spécialisé dans la charia islamique, à son université, il n'a pas ignoré le Coran, il a terminé de le mémoriser avec son étude universitaire. Cheikh Al-Ajmy, s'est rendu au Pakistan pour terminer ses études universitaires où il a obtenu une maîtrise de l'Université de Lahore, et plus tard son doctorat en interprétation du Saint Coran (Tafseer). Cheikh AlAjmy travaille à l'enseignement et parfois il dirige des musulmans à Al-salat sans travail officiel en tant qu'imam pour une mosquée spécifique en raison des circonstances de son travail et de ses multiples intérêts. La récitation de Cheikh al-Ajmy est unique et parfaite, il lit le Coran à la manière de Hafs d'Assem et il a également de nombreux albums islamiques nasheed. Cheikh Ahmad Al-Ajmy aime la littérature et en particulier la poésie, Il a écrit certains de ses nasheeds lui-même, Il a également écrit des nouvelles et des romans et a publié un livre sur le Saint Coran."
    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false;
    this.Ajmi=true
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false


  }
  afffares(){
    this.recitateurInfo="  Le grand Cheikh Fares Abbad, homme religieux et réciteur originaire du Yémen, est un célèbre imam originaire du Yémen doté d’une exceptionnelle voix et d’une psalmodie qui se développe petit à petit. ",


    this.recitateurInfoPlus=" Le grand Cheikh Fares Abbad devint imam de la mosquée qui détonne de renommée et de mérite, nommée la mosquée Abd Arrazaq Affifi située à la ville de Ryad en Arabie Saoudite durant une période de dix ans, et ce pendant seulement le mois sacrée de Ramadan.Le grand Cheikh Faris Abad a une merveilleuse et harmonieuse voix qui lui permet de faire des conférences et des « Jalssatte » islamiques, en la présence de dizaines de fidèles intéressés par l’acquisition de son expérience personnelle, et de son intéressante opinion sur des sujets de haute importance. Ainsi, ces conférences, font du grand Cheikh Faris Abad une réelle célébrité et un réel talent. Et ses récitations coraniques sont d'une réelle harmonie. De nombreux sites internet, et des chaînes télévisées diffusent la psalmodie ou plutôt la production du grand Cheikh Fares Abbad, ainsi que des ondes de stations de radio. Et tout cela ne fait du grand Cheikh Fares Abbad qu’un homme d’une réelle renommée."


    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false;
    this.Ajmi=false
    this.fares=true
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false


  }
  affBandar(){
    this.recitateurInfo=" Bandar Bin Abdoul Azeez Baleela (en arabe : بندر بن عبد العزيز بليله), né à La Mecque en 1975 (1395 du calendrier hégirien), est un imam de la Masjid Al-Haram, la Grande Mosquée de La Mecque, lieu le plus sacré pour les musulmans. ",


    this.recitateurInfoPlus=" Il est diplômé de l'université Umm Al-Qura de La Mecque ainsi que de l'université de Médine. Il obtient en 2001 un diplôme de la jurisprudence islamique de la faculté charia et étude islamique de l'université UmAl Qura. En 2008, Sheikh Baleela est diplômé de son doctorat à l'université de Médine. Après avoir officié la prière dans plusieurs mosquées de La Mecque, il est nommé imam de la grande Mosquée de La Mecque1 en 2013. Il y dirige pour la première fois la prière le 15e Ramadan 1434 (23 juillet 2013) lors du Tarâweeh (prière nocturne du Ramadan).Son fils, Sheikh Abdul Aziz Baleela, est aussi un imam et récitateur reconnu; notamment par la similitude de récitation avec son père."


    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false;
    this.Ajmi=false
    this.fares=false
    this.bandar=true
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=false

  }
  affbasfar(){
    this.recitateurInfo=" Abdullah Ibn Ali Basfar est un célèbre récitateur du saint coran et un grand imam en Arabie Saoudite. Pendant le mois de Ramadan, il est le premier imam à Jedda. ",


    this.recitateurInfoPlus=" Les récitations coraniques d'Abdullah Ibn Ali Basfar ont été diffusées sur de nombreuses chaines télévisées et sur les ondes de plusieurs stations de radio spécialisées dans la récitation du saint coran. Grand réciteur dans le monde musulman, Abdullah Ibn Ali Basfar a présenté des conférences sur divers thèmes de la religion islamique et a incité dans ce cadre, d'aider les pays pauvres et ceux qui sont en crise. Côté humanitaire, il a contribué aux dons attribués à Ndjamena (Tchad).De plus, Abdullah Ibn Ali Basfar a été nommé président de l'instance internationale pour la mémorisation du saint coran corrélative à la ligue islamique mondiale.."


    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false;
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=true
    this.khaled=false
    this.hanif=false
    this.houdaifi=false

  }
  affkhaled(){
    this.recitateurInfo=" Cheikh Khalid Bin Ali Bin Abdan Al Ablaj Al Ghamdi est entré dans ce monde dans la ville sainte de La Mecque, appartenant à la grande tribu de Bani Hashim de Quraysh et d'Al Hassan Bin Al Khalifa Ali Bin Abi Taleb. un jeune âge de 16 ans, sous la supervision d'un Cheikh pakistanais. ",


    this.recitateurInfoPlus=" Khaled Al Ghamdi s'est inscrit à l'Université Umm Al Qura, dans la discipline de Da'wa et Usul al-Deen où il a recueilli des informations utiles et une direction solide comme le roc sous la motivation habile de Cheikh Muhammad Saleh Al Habib, Cheikh Muhammad Al-Mukhtar Al Shanqiti et Sheikh Muhammad Al Khader Al Naji. c'est ici que Shaykh Khaled a obtenu son doctorat convoité. degré aussi.Il a fait partie intégrante et inévitable de l'organisation saoudienne du Saint Coran et du Comité consultatif du ministère des Affaires islamiques de La Mecque. Sa carrière professionnelle en tant qu'Imam a commencé à la Sheikha Bint Abdul Rahman Al Saud Masjid et à la mosquée d'AL Khayf In Mina, la poursuivant avec un travail illustre d'Imam à Masjid Al Haram à la demande de feu le roi Abdullah Bin Abdulaziz Al Saud. . Il continue sa promesse jusqu'à ce jour, même s'il s'est associé au cheikh Bandar Baleela et au cheikh Yasser Al Dossary au cours des années successives.."


    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false;
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=true
    this.hanif=false
    this.houdaifi=false


  }
  affhanif(){
    this.recitateurInfo=" Abdul Wadud Makboul Haneef plus connu sous le nom d’Abdul Wadud Haneef est un réciteur, imam et prédicateur de grande renommée. Il est originaire de Syrie , là où il reçut ses études du primaire au supérieur jusqu’à atteindre le premier pas en temps qu’Imam énormément prestigieux. ",


    this.recitateurInfoPlus=" Depuis son plus jeune âge, Abdul Wadud Haneef était dévoué aux sciences islamiques au point de s’intéresser de plus près au livre de Dieu et apprendre ses maints versets. On le soutint de tous les moyens, afin que ses rêves se réalisent.Abdul Wadud Haneef était depuis ses études secondaires, sous l’égide de grands Cheikhs et hommes de religion syriens. Ils furent ainsi, sa référence et l’exemple à suivre. Et il fit de tel au point qu’il devint et gagna plus de prestige et de renommée.En effet, grâce à sa merveilleuse psalmodie, Abdul Wadud Haneef a réussi à séduire des centaines de fidèles musulmans, par sa voix si particulièrement gracieuse et harmonieuse. Ainsi, on diffuse sa psalmodie à travers les sites internet, les chaînes de télévision, et les stations de radio. Ses récitations coraniques prirent de l’importance, et devinrent très populaires en Syrie.De même qu’Abdul Wadud Haneef a enregistré plusieurs cassettes et enregistrements vocaux qui ont tout à fait séduit le public ou plutôt l’auditeur musulman.Le grand Cheikh Abdul Wadud Haneef était l’imam à la célèbre mosquée du prophète Mohammet à Médine, et ce, durant toute une année (En 1414 de l’hégire)."


    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false;
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=true
    this.houdaifi=false

  }
  affhoudaifi(){
    this.recitateurInfo="Ali Bin Abdur Rahman Al Huthaify (né le 22 mai 1947) ( arabe ; علي بن عبد الرحمن الحذيفي ) est un imam saoudien et khateeb d' Al-Masjid an-Nabawi , et un ancien imam de la mosquée de Quba . Son style de récitation du Coran sur un air lent et profond est largement reconnu Ali ibn Abdur-Rahman al Hudhaify - https://fr.qaz.wiki/wiki/Ali_ibn_Abdur-Rahman_al_Hudhaify ",


    this.recitateurInfoPlus=" En 1972, il a obtenu un baccalauréat en droit de l' Université islamique Imam Muhammad bin Saud . En 1975, il a obtenu une maîtrise en droit islamique de l'Université Al-Azhar , puis il a obtenu son doctorat de la même université. Il était un imam et Khateeb de la mosquée Quba en 1978. En 1979, il est devenu un imam d' Al-Masjid al-Nabawi . En 1981, pendant le mois de Ramadan , il a été nommé imam pour les prières de Tarawih à Masjid al-Haram , puis il est retourné à la Grande Mosquée de Médine où il continue de diriger les prières Ali ibn Abdur-Rahman al Hudhaify ."


    this.aff=true;
    this.samad=false;
    this.saad=false;
    this.juhani=false;
    this.maher=false;
    this.boukhater=false;
    this.Ajmi=false
    this.fares=false
    this.bandar=false
    this.basfar=false
    this.khaled=false
    this.hanif=false
    this.houdaifi=true
  }
  dataJson:any  = [
    {
      id: 1,
      nom: ' Cheikh Mishary bin Rashid Alafasy ',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615825637/Mishary_bin_Rashid_Alafasy_ai9uuj.jpg",
      description: " Il mémorise l’ensemble du Coran en deux ans (1992-1994) puis part étudier les dix lectures et l’exégèse du Coran à l’Université islamique de Médine. ",

      paragrapheF:"Mishary bin Rashid Alafasy   Nom de naissance  مشاري بن راشد العفاسي Mishary Rashid Alafasy   Naissance 5 septembre 1976    Mishary bin Rashid Alafasy (arabe :  مشاري بن راشد العفاسي (Mišāri bin Rāšid Al-Afāsī)), né le 5 septembre 1976 à Koweït, est un imam, récitateur du Coran et de chants islamiques. Il mémorise l’ensemble du Coran en deux ans (1992-1994) puis part étudier les dix lectures et l’exégèse du Coran à l’Université islamique de Médine (Arabie Saoudite). Il a étudié auprès de Ahmed Abdelaziz Al-Zayat (arabe : أحمد عبد العزيز الزيات) et Ibrahim Ali Al-Samanoudi (arabe :  ).إبراهيم علي شحاته السمنوديActuellement, il est imam à la Grande Mosquée de Koweït et khatib au Ministère des Awqaf et des Affaires Islamiques au Koweït. Il possède la chaîne de télévision Alafasy TV, diffusant des programmes sur l’islam. Il est célèbre dans le monde musulman pour ses récitations du Coran et ses chants islamiques. Ses plus gros succès restent ses chansons Tala’ al Badru ‘Alayna et Ramadan, chantée en arabe, anglais et français Lectures coraniques . ",
     paragrapheA:" هو مشاري بن راشد بن غريب بن محمد بن راشد العفاسي من العفسة من قبيلة مطير ، من مواليد دولة الكويت ليوم الأحد 11 رمضان 1396 هـ / الموافق 5 سبتمبر 1976م، متزوج وأب لابنين وثلاث بنات، يكنّى بأبي راشد. هو قارئ للقراّن الكريم ومنشد.  يتمتّع بصوت عذب وقوّة في التحكّم بطبقات الصوت وروعة الأداء. له العديد من الإصدارات التي انتشرت في الوطن العربي والإسلامي والعالم.     درس في السعودية بالجامعة الإسلامية بالمدينة النبوية تحديدًا بكلية القرآن الكريم والدراسات الإسلامية وتخصّص في القراءات العشر والتفسير. ولقد تتلمذ الشيخ والمنشد على أيدي كبار علماء ومقرئي المدينة النبوية في كليّة القراءات. وصل في منحى دراساته إلى السنة الثالثة. أُجيز القارئ في قراءة عاصم رواية حفص من طريق الشاطبية وسافر المقرئ مشاري إلى مصر للحصول على إجازات من كبار مقرئي العالم الإسلامي.     رحلته مع القرآن الكريم حفظ القرآن الكريم كاملاً في عامي 1992 - 1994 م ثم درس القراءات العشر والتفسير بكليّة القرآن الكريم والدراسات الإسلامية في الجامعة الإسلامية بالمدينة المنوّرة أوّل إصدار قرآني له ( غافر وفصّلت و الشورى 1416 هـ ) و أمّ المصلين للمرة الأولى بالمسجد الكبير بالكويت في العشر الأواخر من رمضان 1420 هـ حصل على إجازة بقراءة عاصم بن أبي النجود من الشيخ العلاّمة عبد الرافع رضوان الشرقاوي و إجازة شفوية من الشيخ العلاّمة إبراهيم السمنودي وإجازة برواية حفص عن عاصم من الشيخ العلاّمة أحمد عبد العزيز الزيّات قرأ على الشيخ الدكتور أحمد عيسى المعصراوي بقراءة عاصم بن أبي النجود من طريق الشاطبية والطيبة قرأ أيضاً على الشيخ إبراهيم ",

       urls:["https://www.youtube.com/embed/M3xjz4nxzGQ","https://www.youtube.com/embed/LXR92wkDQKM" ],
       urls2:["https://www.youtube.com/embed/M3xjz4nxzGQ","https://www.youtube.com/embed/4yWLofNagy8" ,"https://www.youtube.com/embed/g7sVMcZ0eOg"]
  }, {
      id: 2,
      nom: ' Cheikh Hani Ar Rifai ',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615825900/هاني_الرفاعي_rmjssi.jpg",
      description: "Hani Ar Rifai est né dans la ville de Djeddah, en Arabie Saoudite, Cheikh Hani Ar-Rifai est l’Imam et Khateeb de Masjid Anani dans la même ville. Lors de son apprentissage du Saint Coran, l’estimé Cheikh a eu le privilège d’être en la compagnie et l’acquisition de connaissances d’autres Shuyookh bien connus tels que Shaykh Muhammad Ibn Abdu Rahim Achichin.",

      paragrapheF:" Il a terminé sa spécialisation en études islamiques à l’Université King Abdulaziz et a cherché une éducation à la demande des meilleurs chercheurs et des cheikhs tels que Shaykh Al-allamah Abdullah Bin Bayyah, Sheikh Khaldoun Al-Ahdab et Sheikh Ali Jaber pour n’en nommer que quelques-uns. En raison de la restitution émotionnelle et réconfortante du Livre d’Allah, le Cheikh Hani Ar-Rifai a été élu spécial récitateur du Saint Coran à la Cour royale par le ministère saoudien de la Culture et de l’Information et a obtenu la désignation convoitée de directeur des affaires juridiques de l’hôpital du roi Faysal et du centre de recherche de Djeddah.",

     paragrapheA:" هو الشيخ هاني بن عبد الرحيم بن يحيى الرفاعي، القارئ والإمام والخطيب، ولد بمدينة جدة بالمملكة العربية السعودية  هـ1394 في العام ( م )، متزوج وله خمسة أبناء (ولدان وثلاث بنات). وهو حاليا إمام وخطيب جامع العناني بحي 1974 الحمراء بجدة. نشأ الشيخ هاني الرفاعي في أسرة متدينة يهتم أفرادها بحفظ القرآن الكريم بما في ذلك أبواه رحمهما الله  سنة. أجازه الشيخ 12 وإخوته الكبار الذين كانوا بمثابة القدوة له، وهو ماحفزه على حفظ كتاب الله تعالى وعمره لايتعدى المصري الجليل محمد بن عبد الرحيم عشيشي على رواية حفص عن عاصم ثم قرأ جزءا من القرآن على الشيخ علي جابر إمام المسجد الحرام سابقا رحمه الله، وكان قد بدأ الحفظ على يد الشيخ محمد يوسف (إمام الأمير جامع متعب) . تخرج من كلية الآداب قسم الدراسات الإسلامية بجامعة الملك عبد العزيز في جدة بتفوق، وتتلمذ فيها على يد مشايخ عظام وعلماء أفذاذ منهم الشيخ الدكتور العلامة عبد الله بن بية (في أصول الفقه) والشيخ الدكتور خلدون الأحدب (في الحديث) والشيخ الدكتور علي جابر (في الفقه المقارن)، وغيرهم.  ",

       urls:["https://www.youtube.com/embed/5_ejn1eeI6Y","https://www.youtube.com/embed/MSl4UiyKVLw"],
       urls2:["https://www.youtube.com/embed/E3fAWPQQf8Q","https://www.youtube.com/embed/7d8F_-vnmWw"]

  }, {
      id: 3,
      nom: 'Cheikh Laayoun EL Kouchi ',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615825623/laayoun-el-kouchi-197x300_tu2dhd.jpg",
      description: "CheikhLaayoun EL Kouchiest un grand réciteur marocain. Il est né à Safi en 1967.Cheikh Laayoun El Kouchi a appris le Coran à l’âge de 9 ans. Il a ensuite suivi ses études et areçu le Baccalauréat en Lettres modernes. Actuellement.",

      paragrapheF:" le Cheikh Layoun El Kouchi est le réciteur de la mosquée ‘Al Andalous’ au quartier Anassi.Cheikh Laayoun EL Kouchi (lien)A APPRIS LE CORAN À L’ÂGE DE 9 ANS.Cliquez ici(lien)Cheikh Laayoun EL Kouchi est un grand réciteur marocain. Il est né à Safi en 1967.Cheikh Laayoun El Kouchi a appris le Coran à l’âge de 9 ans. Il a ensuite suivi ses étudeset a reçu le Baccalauréat en Lettres modernes. Actuellement, le Cheikh Layoun El Kouchi est le réciteur de la mosquée ‘Al Andalous’ au quartier Anassi. ",
      paragrapheA:"",
       urls:["https://www.youtube.com/embed/JcyWoQ2OwYQ","https://www.youtube.com/embed/jk9M_Rfwq7E"],
       urls2:["https://www.youtube.com/embed/QpXz57FEsVw","https://www.youtube.com/embed/UWsBN0RLau4"]

  }, {
      id: 4,
      nom: ' Cheikh Abdul Rahman Ibn Abdul Aziz Al-Sudais',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615825637/عبد_الرحمن_السديس_nkamtd.jpg",
      description:"CheikAbdul Rahman Ibn Abdul Aziz Al-Sudaisest l’imam en chef du Masjid al-Haram, la mosquée la plus sacrée pour les musulmans à La Mecque. Il est un récitateur du Coran suivant la lecture de hafs.",
      paragrapheF:"Cheikh Al-SudaisIL A APPRIS LE CORANÀ L’ÂGE DE 12 ANSAbdul Rahman Ibn Abdul Aziz Al-SudaisAbdul Rahman Ibn Abdul Aziz Al-Sudais (en arabe : ,عبد الرحمن السديسAbdoul Rahman alSoudaïs) est l’imam en chef du Masjid al-Haram, la mosquée la plus sacrée pour lesmusulmans à La Mecque. Il est un récitateur du Coran suivant la lecture de hafs. Sa voix estreconnue comme l’une des meilleures parmi les récitateurs de coran. Il est né le 10 février1960 à Riyad en Arabie saoudite. Il est actuellement le président du comité de gestion desdeux mosquées saintes. Il appartient au clan `Anizzah. Il a vécu à Riyad, où il a appris leCoran à l’âge de 12 ans. Il a fréquenté l’école primaire Ibn Harith puis l’institut scientifiquede Riyad dans lequel il a obtenu son diplôme en 1979 avec mention excellent. Il a intégré parla suite l’académie islamique de Riyad et en sort en 1982 avec un diplôme de la charia. Il aobtenu sa maîtrise en sciences islamiques de la charia à l’université islamique de l’imamMohammed Ibn Saoud en 1987 et obtient son doctorat dans ce domaine à l’universitéOumm al-Qura en 1995 alors qu’il travaillait là comme maître. ",

      paragrapheA:" عبد الرحمن بن عبد العزيز بن عبد الله بن محمد السديس ويُعرَف بالسديس هو الرئيس العام لشؤون المسجد الحرام والمسجد النبوي وإمام وخطيب بالحرم المكي الشريف. ولد في البكيرية بمنطقة القصيم عام 1379 هـ، وهو من أشهر مرتلي القرآن الكريم في العالم، وتمكن من حفظ القرآن الكريم ولم يكن يبلغ من العمر اثني عشر عامًا. عُرِف عبْدُ الرحمن السديس بالنبرة الخاصّة في صوته التي تخشع معها الأفئدة وتجويده الممتاز للقرآن الكريم، وقد نال السديس جائزة الشخصية الإسلامية للسنة في الدورة التاسعة لجائزة دبي الدولية للقرآن الكريم عام 1995.    شغل السديس عدة مناصب أبرزها تعيينه إماماً وخطيباً بالمسجد الحرام بأمر في عام 1404 هـ وكان أقدم أئمة الحرم المكي وأصغرهم سنًّا عند تعيينه فقد كان عمره حينئذ 22 عامًا، وباشر عمله في شهر شعبان من العام نفسه يوم الأحد الموافق 22/8/1404 هـ في صلاة العصر، وكانت أول خطبة له في رمضان من العام نفسه بتاريخ 15/9.",

      urls:["https://www.youtube.com/embed/OU8t0LmwcnI","https://www.youtube.com/embed/qqs2t2nW26o"],
      urls2:["https://www.youtube.com/embed/a2-nTZiDQSg","https://www.youtube.com/embed/A3-ULLct0dA","https://www.youtube.com/embed/E1rjHMcG3eQ"]
  }, {
      id: 5,
      nom: ' Cheikh Yasser Al Dosari',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615826519/276px-Yasser_Al-Dosari_bwcxkr.png",

      description:"CheikYasser Ibn Rashed Ibn Houseine Al Ouadaani Al Dossariest l’un des imams du Masjid al-Haram, la mosquée la plus sacrée pour les musulmans à La Mecque. Il est un récitateur du Coran suivant la lecture de hafs.",

      paragrapheF:"CheikYasser Al Dossari IMAM, RÉCITATEUR DU CORANYasser Ibn Rashed Ibn Houseine Al Ouadaani Al DossariCheikh Al Dosari, le prédicateur éloquent et l'imam vertueuxSon nom complet est Yasser Ibn Rashed Ibn Houseine Al Ouadaani Al Dossari, et il est connu comme l’un des prédicateurs et lecteurs du Coran les plus célèbres du monde arabe et islamique. Il est imam et orateur de la mosquée Dakhil à Riyad et secrétaire général de l'Université Prince Sultan pour l'enseignement du Coran aux forces de défense saoudiennes.Cheikh Al-Dosari est né dans la province de Kharj (sud-est de Riyad), en 1981, il est marié et père de 2 filles et 2 garçons.Yasser Al-Dosari a atteint un très haut niveau de science, car il a pu obtenir un baccalauréat de la Faculté de la charia de l'Université islamique Imam Muhammad bin Saud en 1424, puis unemaîtrise, et a finalisé son programme académique avec un doctorat en Institut de jurisprudence comparée de la magistrature de la même université.Cheikh al-Dossari était assisté par un certain nombre d'érudits et de religieux vertueux, tels que le cheikhDr Abdullah bin Jibreen, le cheikh Abdul Aziz bin Abdullah Al-Sheikh (mufti en Arabie saoudite), le cheikh Dr Saleh bin Humaid (président du conseil Pays du CSM), et Cheikh Saad bin Nasser Ashateri (un membre des principaux prédicateurs), et la liste est plus longue ...Yasser Al Dosari a terminé la mémorisation du Coran à l'âge de 15 ans, et son talent est apparu remarquablement dans la lecture du Coran, sa voix fraîche a été témoignée par les experts du Coran, comme le cheikh Bakri Tarabshi, et le cheikh Ibrahim Al Akhdar, et en tant que question de En fait, il a publié un certain nombre de cassettes audio qui comprend les prières du Coran Taraweeh, 51 versions coraniques, plus 6 variées.Cheikh Al-Dossari a joué le rôle d'un imam dans un certain nombre de mosquées, comme mosquée Dakhli à Riyad, où il dirige un grand nombre de prières. En plus de cela, il a été invité à diriger les prières dans d'autres pays, tels que les Émirats arabes unis, l'Égypte, le Bahreïn, la Suisse et la République tchèque.Il a donné un certain nombre de conférences et de discours, dans de multiples conférences et chaînes TV-Radio.Il a occupé d’autres responsabilités, en tant que membre de l’Université King Saoud, du Global Europe Symposium of Muslim Youth et d’une autre association islamique. À la suite de sa réalisation, il a été nommé comme l'une des personnalités les plus influentes de la communauté.",

     paragrapheA:" ياسر بن راشد بن حسين الودعاني الدوسري هو أحد قراء القرآن الكريم في المملكة العربية السعودية ومن أئمة المسجد رفصنمًارابتعامارحلا1441للهجرة،  وهو مؤسس مجموعة آيات للإعلام القرآني مع الشيخ ناصر القطامي. وهو إمام في المسجد الحرام وتم تعيينه في المسجد الحرام يوم السبت 1441/2/13هـ الموافق 2019/10/12م وصنف ضمن أكثر يعمجةلجمبسحبعمتجملابًاريثأتتايصخشلاة إنسان ياسر الدوسري هو عضو هيئة التدريس بـجامعة الملك سعود ةيملاسلإادوعسنبدمحمماملإاةعماجـبءاضقلليلاعلادهعملانمنراقملاهقفلايفهاروتكدىلعلصاحو،اًقباسوهو الان أستاذ مشارك في كلية الشريعة والدراسات الاسلامية بجامعة ام القرى.ولد في محافظة الخرج سنة 1400للهجرة سنة 1980للميلاد، حصل على شهادة البكالوريوس من كلية الشريعة في جامعة الإمام محمد بن سعود الإسلامية، وعمل كأمين عام لجمعية الأمير سلطان لتحفيظ القرآن بالدفاع الجوي، وبعد سبع سنوات درس الماجستير في الفقه المقارن من المعهد العالي للقضاء في نفس الجامعة، ثم حصل على شهادة الدكتوراة بقسم الفقه المقارن من المعهد العالي للقضاء برسالته تحت عنوان'الفروق الفقهية عند الحنفية في البيوع'.قام الشيخ بإمامة العديد من المساجد ومنها مسجد عبد الله الخليفي لسنتين ثم مسجد الكوثر لعدة سنوات ثم جامع الإمام عبد الله بن سعود لخمس سنوات وجامع الشيخ عبد العزيز بن باز لسنوات ثم إمامة جامع الدخيل في مدينة الرياض منذ سنة1426ناضمررهشيفنِّيُعو،ةرجهلل1436للهجرة (2015للميلاد) كإمام للمصلين في صلاة التراويح. الشيخ هو لثمتايعمجلانمديدعلايفوضعو،دوعسكلملاةعماجيف)دعاسمذاتسأمثرضاحمك(سيردتلاةئيهبٌوضعًاضيأالجمعية الفقهية العلمية السعودية، والجمعية العلمية السعودية للقرآن وعلومه، والجمعية السعودية للدراسات الدعوية، وعضو لجنة أوروبا في الندوة العالمية للشباب الإسلامي، وعضو في جمعية البر بمدينة الخرج.",

      urls:["https://www.youtube.com/embed/3lBMMYM9OUY","https://www.youtube.com/embed/WMv1d4TlHTU"],
      urls2:["https://www.youtube.com/embed/5NCi3duFv7I","https://www.youtube.com/embed/rABa7efiii8","https://www.youtube.com/embed/PTKoZwnOnoY"]
  }, {
      id: 6,
      nom: ' Cheikh Maher Al Mueaqly',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615827070/Maher_Al_Mueaqly_kviwn5.png",

      description:"",
      paragrapheF:"",
      paragrapheA:" ماهر بن حمد بن معيقل المعيقلي البلوي حفظ القرآن الكريم ودرس كلية المعلمين في المدينة المنورة وتخرج منها معلماً لمادة الرياضيات وانتقل للعمل بمكة المكرمة معلماَ ثم أصبح مرشداَ طلابياَ في مدرسة 'الأمير عبد المجيد' بمكة المكرمة. حاصل على درجة الماجستير بتاريخ 1425 هـ في فقه الإمام أحمد بن حنبل في كلية الشريعة بجامعة أم القرى وحصل على درجة الدكتوراه في التفسير، ويعمل كأستاذ مساعد بقسم الدراسات القضائية بكلية الدراسات القضائية والأنظمة بجامعة أم القرى ويشغل منصب وكيل الكلية للدراسات العليا والبحث العلمي.   حصل على الماجستير من جامعة أم القرى كلية الشريعة قسم الفقه في 1425 هـ وكانت الرسالة بعنوان: مسائل الإمام أحمد ابن حنبل الفقهية برواية عبد الملك الميموني (جمع ودراسة) وحصل فيها على تقدير ممتاز. وحصل على الدكتوراه من جامعة أم القرى سنة 1432 هـ وهي تحقيق كتاب (تحفة النبيه شرح التنبيه) في الحدود والأقضية (للإمام الشيرازي في الفقه الشافعي).  كذلك حصل على رسالة الدكتوراه وكانت بعنوان 'تحفة النبيه في شرح التنبيه للزنكلوني الشافعي دراسة وتحقيقاً لباب الحدود والقضاء' ونوقشت الرسالة بقاعة الملك عبد العزيز. وحصل الشيخ الدكتور على درجة الدكتوراة في الفقه بتقدير ممتاز مع مرتبة الشرف الأولى الثلاثاء 28 المحرم 1434 من الهجرة 11 / 12 / 2012 وهو من أشهر القراء في العالم الإسلامي يتميز الشيخ بصوت جميل ورائع",

      urls:["https://www.youtube.com/embed/EqqMCeVEElE","https://www.youtube.com/embed/vhDrM2TuGKQ"],
      urls2:["https://www.youtube.com/embed/maxDtYi-9FI"]

  }, {
      id: 7,
      nom: ' Cheikh saad el ghamidi',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615828299/saad-el-ghamidi_ws5r7b.png",
      description:"CheikSaad Al Ghamdiest unrécitateurdu Coran et quidétient la permission d'attribution de Narration de Hafs d'Asim.Il a été nommé co-imam dans les prières de Tarawih à la mosquée du Prophète.",

       paragrapheF:"Cheik Saad Al GhamdiIMAM, RÉCITATEUR DU CORANSaad Al GhamdiSaad Al Ghamdiné à Dammam, Arabie saoudite en 1967; est un récitant du Coran et un imam. Il a mémorisé tout le Coran en 1990, alors qu'il avait 22 ans. Il est souvent connu pour son célèbre Tajwid.Il a étudié la loi islamique (études islamiques) à Dammam, en particulier à l'école de la charia, source des commandements religieux musulmans. En 2012, il a été nommé Imam de la mosquée Safia Kanoo à Dammam avant d'exercer la même profession dans plusieurs mosquées à travers le monde, notamment aux États-Unis, auRoyaume-Uni et en Autriche.Pendant le Ramadan 2009, Cheikh Saad Al Ghamdi était un Imam pendant la prière du Taraweeh à Al-Masjid an-Nabawi (lieu sacré de l'islam à Médine) de Médine.",

       paragrapheA:" وُلد سعد الغامدي واسمه الكامل سعد بن سعيد بن سعد الغامدي سنة 1968م بمدينة الدمام في المملكة العربية السعودية. كان والداه من أهل الورع والتقوى، وكان للقرآن عندهما مكانة خاصة ومرتبة عظيمة، الأمر الذي أثَّر في نفسية سعد الغامدي وساهم في تكوين شخصيته في سن مبكرة، فاعتنى بالقرآن واهتم به، وكرَّس وقته وجهده لدراسة قواعده والإلمام بأحكامه.   وهكذا، تلقَّى سعد الغامدي تعليمه الأولي في مسقط رأسه بالدمام، فالتحق بمدرسة مصعب بن عمير الابتدائية، ثم بمدرسة الفيصل الإعدادية، وبمدرسة الشاطئ الثانوية. وبعد نجاحه في اجتياز هذه المراحل بنجاح، التحق بكلية الشريعة التابعة لجامعة الإمام محمد بن سعود الإسلامية بمحافظة الأحساء، فدرَس أصول الدين بشكل أكاديمي، وتخرج منها سنة 1410هـ.     بعد تخرجه بخمس سنوات، تمكن الشيخ سعد الغامدي من إتمام حفظ القرآن الكريم كاملا، وكان ذلك سنة 1990م. سنتان بعد ذلك، حصل على إجازة الإسناد برواية حفص عن عاصم على يد الشيخ أحمد أبوضيف الذي أخذ على يده قواعد القرآن وأحكامه. كما تأثر بالشيخ مروان القادري إمام وخطيب جامع المجدوعي بمدينة الدمام، حيث كان بالنسبة له مُعلما ومُربِّيا ومُرشدا، وتعلم على يده القواعد الشاملة لقراءة كتاب الله، فأصبح واحدا من كبار مرتلي القرآن الكريم في العالمين العربي والإسلامي.  بعد استكمال مسيرته الدراسية وتحصيله العلمي، اشتغل الشيخ سعد الغامدي في الإمامة سنة 1411هـ، فأصبح إماما بجامع عقبة بن غزوان بمدينة الدمام الذي كان يصلي فيه صلاة التراويح والقيام على مدى سنوات. وفي سنة 1421هـ تم تعيينه إماماً وخطيباً على جامع يوسف بن احمد كانو بمدينة الدمام. لِيُعيَّن سنة 1430هـ إماماً في الحرم النبوي، حيث كان يصلي بالناس ويؤمهم خلال شهر رمضان المبارك.",

      urls:["https://www.youtube.com/embed/RN3ar_pNrD4","https://www.youtube.com/embed/STXWcU6eGCI?list=PLLZxZ8t5-llbwaKtLcBKEe6HxjXlMv5dF"],
      urls2:["https://www.youtube.com/embed/ykFLasD1k7k?list=PLLZxZ8t5-llbwaKtLcBKEe6HxjXlMv5dF","https://www.youtube.com/embed/zAiwO7agkWQ?list=PLLZxZ8t5-llbwaKtLcBKEe6HxjXlMv5dF","https://www.youtube.com/embed/Goo4Ea00fnE?list=PLLZxZ8t5-llbwaKtLcBKEe6HxjXlMv5dF"]
  },
  {

          Id: 8,
          nom: 'Cheikh ahmed khalil ',
          imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615840296/ahmedkhalil_uzkyle.jpg",

          description:"",

          paragrapheF:"",

          paragrapheA: "أحمد ابن خليل ابن شاهين ابن أحمد ابن قبيس  هـ في محافظة قنا بصعيد مصر1375 ولد في عام  )( الشيخ أحمد ابن خليل ابن شاهين مدرس في مدارس تفسير القرآن الكريم في المملكة العربية السعودية إضافة إلى عمله في حلقات القرآن الكريم في المساجد )( التحق بالدراسة في المرحلة الابتدائية وفي نفس الوقت بدأ بحفظ القرآن واستطاع حفظه في سنتين على يد الشيخ أحمد السيد كيلاني يرحمه الله وقبل أن ينهي المرحلة الابتدائية انتقل والده إلى رحمة الله  لكن طموحه لن بتوقف حيث انتقل إلى محافظة سوهاج والتقى فيها بالشيخ محمد عبد الرحمن البليني الذي قرأ عليه بعض أجزاء القرآن وأجازه فيها ثم عاد بعد ذلك إلى بلدته ثم اتجهت أنظاره إلى القاهرة ليكمل بها ما بدأه في قريته ليلتقي بالشيخ السيد محمد عباس رحمه الله وقرأ عليه القرآن وأيضا قرأ على الشيخ عامر السيد عثمان وغيرهم كثيرين. التحق بمعهد القراءات بالأزهر الشريف ودرس التجويد لمدة سنتين تبعه بمرحلة آليه في القراءات والتي أمضى بها ثلاث  سنوات من عمره ثم أتمها بمرحلة التخصص في القراءات والتي استمرت لثلاث سنوات وبهذه الدراسات استكمل  من خلال إلمامه بالقراءات السبع والقراءات العشر الصغرى والقراءات العشر الكبرى وقد ً وعمليا ً الشيخ علوم القرآن علميا استفاد من خلال دراسته بعدد كبير من العلماء البارزين من أمثال الشيخ حسن الحلاواني والشيخ محمد العتل والشيخ عبد الرؤوف بري وعبد الرحمن البري والشيخ أحمد مصطفى حسنو.  ولا يزال في مدارس تفسير القرآن الكريم في المملكة العربية السعودية إضافة إلى عمله في حلقات القرآن ً عمل مدرسا الكريم في المساجد وذلك بعد صلاة العصر وكذلك العمل في المركز الخيري لعلوم القرآن التابع لوزارة الشؤون الإسلامية والأوقاف والدعوة والإرشاد وكذلك مشاركته في دورات المعلمين التي تقيمها وزارة التربية والتعليم في المملكة     وقد شارك في الإشراف على عدة مسابقات قرآنية مثل مسابقة الأميرسلمان لحفظ القرآن الكريم ومسابقة الحرس الوطني ومسابقة إدارة التعليم في الرياض إلى جانب مساهمته في العديد من الندوات العلمية الخاصة في مجال القرآن وعلومه في الداخل والخارج  . لإذاعة القرآن الكريم من المملكة العربية السعودية ً وقد قام بتسجيل المصحف المرتل كاملا",

          urls:["https://www.youtube.com/embed/WYKbaKt-lsk" ,"https://www.youtube.com/embed/0lHIKJ_RYYA"],
          urls2:["https://www.youtube.com/embed/IXIpyFYvc1Q","https://www.youtube.com/embed/GhD0pQBLAy0","https://www.youtube.com/embed/bP9C9oY60As"]

  },
  {

      id: 9,
      nom: ' Cheikh mahmoud khalil al hussary',
      imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615841351/mahmoud-khalil-al-hussary_qkfmcf.png",
      description:"Cheikh Mahmoud Khalil al-Hussary est un récitateur égyptien du Coran et et l'une des personnalités éminentes dans ce domaineet Il a excellé dans la lecture du Coran avec les dix lectures.",

       paragrapheF:"CheikhMahmoud Khalil al-HussaryRÉCITATEUR DU CORANCheikhMahmoud Khalil al-HussaryCheikh Mahmoud Khalil al-Hussary, également connu sous le nom d'Al-Hussary, était un récitateurégyptien largement acclamé pour sa récitation exacte du Coran. à l'âge de 12 ans. En 1944, Al-Hussarya remporté le concours de récitation du Coran de la radio égyptienne qui comptait environ 200 participants, y compris des récitateurscomme Muhammad Rifat.El Minshawy, Abdul Basit, Mustafa Ismail et Al-Hussary est généralement considéré comme le récitateur leplus important et le plus célèbre des temps modernes pour avoir eu un impact énormesur le monde islamique.",

        paragrapheA   :" الشيخ محمود خليل الحصري (17 سبتمبر 1917 - 24 نوفمبر 1980) قارئ قرآن مصري ويعد أحد أعلام هذا المجال البارزين، من مواليد قرية شبرا النملة، طنطا، محافظة الغربية، له العديد من المصاحف المسجلة بروايات مختلفة. كان والده قبل ولادته قد انتقل من محافظة الفيوم إلى هذه القرية التي ولد فيها. وهو قارئ قرآن مصري أجاد قراءة القرآن الكريم بالقراءات العشر.انتقل والده السيد خليل قبل ولادته من محافظة الفيوم إلى قرية شبرا النملة، حيث ولد الحصري. والدته هي السيدة فرح أو كما يطلق عليها أهل القرية'فرحة'. أدخله والده الكتاب في عمر الأربع سنوات ليحفظ القرآن وأتم الحفظ في الثامنة من عمره. كان يذهب من قريته إلى المسجد الأحمدي بطنطا يوميا ليحفظ القرآن وفي الثانية عشر انضم إلى المعهد الديني في طنطا. ثم تعلم القراءات العشر بعد ذلك في الأزهر.    أخذ شهاداته في ذلك العلم (علم القراءات) ثم تفرغ لدراسة علوم القرآن لما كان لديه من صوت متميز وأداء حسن. في عام 1944م تقدم إلى امتحان الإذاعة وكان ترتيبه الأول على المتقدمين للامتحان في الإذاعة. في عام 1950م عين قارئا للمسجد الاحمدي بطنطا كما عين في العام 1955م قارئا لمسجد الحسين بالقاهرة. كان أول من سجل المصحف الصوتي المرتل برواية حفص عن عاصم وهو أول من نادى بإنشاء نقابة لقراء القرآن الكريم، ترعى مصالحهم وتضمن لهم سبل العيش الكريم، ونادى بضرورة إنشاء مكاتب لتحفيظ القرآن في جميع المدن والقرى، وقام هو بتشييد مسجد ومكتب للتحفيظ بالقاهرة. أدرك الشيخ الحصري منذ وقت مبكر أهمية تجويد القرآن في فهم القرآن وتوصيل رسالته، فالقراءة عنده علم وأصول؛ فهو يرى أن ترتيل القرآن يجسد المفردات القرآنية تجسيدًا حيًا، ومن ثَمَّ يجسد مدلولها الذي ترمي إليه تلك المفردات...كما أن ترتيل القرآن يضع القارئ في مواجهة عقلانية مع النص القرآني، تُشعر القارئ له بالمسؤولية الملقاة على عاتقه. كان يقرأ القرأن في مسجد قريته، وفي اجتماعات السكان هنالك، وفي عام 1944 تقدم إلى الإذاعة المصرية بطلب كقارئ للقرآن الكريم وبعد مسابقة حصل على العمل وكانت أول بث مباشر على الهواء له في 16 نوفمبر 1944م، استمر البث الحصري له على أثير إذاعة القرآن المصرية لمدة عشر سنوات. كان يقرأ القرأن في مسجد قريته، وفي اجتماعات السكان هنالك، وفي عام 1944 تقدم إلى الإذاعة المصرية بطلب كقارئ للقرآن الكريم وبعد مسابقة حصل على العمل وكانت أول بث مباشر على الهواء له في 16 نوفمبر 1944م، استمر البث الحصري له على أثير إذاعة القرآن المصرية لمدة عشر سنوات.     عين شيخاً لمقرأة سيدي عبد المتعال في طنطا. في 7 أغسطس 1948 صدر قرار تعيينه مؤذنا في مسجد سيدي حمزة، ثم في 10 أكتوبر 1948 عدل القرار إلى قارئ في المسجد مع احتفاظه بعمله في مقرأة سيدي عبد المتعال. ليصدر بعد ذلك قرار وزاري بتكليفه بالإشراف الفني على مقاريء محافظة الغربية. انتدب في 17 إبريل 1949م قارئا في مسجد أحمد البدوي في طنطا (المسجدالأحمدي). في عام 1955م انتقل إلى مسجد الإمام الحسين في القاهرة.",


      urls:["https://www.youtube.com/embed/9k_EmxronAQ","https://www.youtube.com/embed/wQeW6sjk7jA"],
      urls2:["https://www.youtube.com/embed/EwgRdyFj-m4","https://www.youtube.com/embed/L0FU8MgCJdE","https://www.youtube.com/embed/XtmV_pA1Rbs"]

},
{

  id: 10,
  nom: 'Cheikh Abdullah Al Johany',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615883706/SnVoYWluaTAzQDN4LnBuZw_i4yjdo.png",

  description:"Cheikh Abdullah AwadAl Juhany est l'un des imams d'Al Masjid Al-Haram (mosquée sacrée de la Mecque) et l'un des récitants islamiques les plus célèbres.",

     paragrapheF:"  Cheikh Abdullah Al-Johany ,RÉCITATEUR DU CORAN Cheikh Abdullah Al-Johany Cheikh Abdullah Awad Al Juhany est l'un des imams d'Al Masjid Al-Haram (mosquée sacrée de la Mecque) et l'un des récitants islamiques les plus célèbres, il est né à Al-medina (Arabie saoudite) en 1396/1976, et il a terminé mémoriser le Coran à un jeune âge dans l'une des mosquées de la médina où il a également terminé son éducation de base. Son intelligence à l'apprentissage du Coran était bien connue et évidente; il a remporté le premier prix du concours international du Coran à l'âge de 16 ans. Son ascension islamique et son intérêt pour le Coran l'ont amené à rejoindre la Faculté du Coran de l'Université islamique de Médine. Après avoir obtenu son diplôme, il a travaillé comme professeur du Coran dans une école de Médine, il a également travaillé à la préparation des enseignants à Médine pendant un certain nombre d'années avant sa nomination au Collège de Da'wa `` Appel islamique '' et Fondamentaux de la religion (Université Umm al-Qura ) où il obtient sa maîtrise et son doctorat en études coraniques. Sa carrière dans le domaine de la direction de Salah est pleine de réalisations car il a commencé cette carrière tôt, quand il était jeune homme, il était Imam dans les trois mosquées les plus célèbres d'Al-medina (masjid al- Qiblatain, masjid Quba et masjid Al- nabawi [la mosquée du prophète]). Cheikh Abdullah Awad Al Juhany a partagé à la tête de la salat Altraweh à al- masjid Al- haram (la sainte mosquée de la Mecque) avec d'autres imams en 1426/2005, puis il a été nommé Imam et prédicateur à Masjid Haram (la grande mosquée de la Mecque) en 1428/2007. Cheikh al-Juhani a passé la majeure partie de sa vie au service du livre de Dieu (Coran); il a mémorisé le Coran quand il était jeune puis il est devenu un enseignant du Coran après cela il s'est spécialisé dans les études du Coran et il est devenu imam des mosquées islamiques les plus célèbres .",

    paragrapheA:"  الشيخ عبد الله عوض الجهني هو أحد أئمة المسجد الحرام ومن أشهر القراء المسلمين ، ولد بالمدينة المنورة (المملكة  ، وأكمل - حفظ القرآن في سن مبكرة في أحد مساجد المدينة المنورة حيث أنهى 1976/1396العربية السعودية) عام  . حصل على الجائزة الأولى في مسابقة القرآن الدولية عن ً وواضحا ً تعليمه الأساسي. كان ذكاءه في تعليم القرآن معروفا د 16عمر يناهز ا. صعو ه الإسلامي واهتمامه بالقرآن جعله يلتحق بكلية القرآن في الجامعة الإسلامية بالمدينة ً عام  كما عمل في إعداد المعلمين بالمدينة ، ا للقرآن الكريم في مدرسة بالمدينة المنورة ً المنورة. بعد التخرج عمل مدرس المنورة لعدة سنوات قبل تعيينه في كلية الدعوة الإسلامية وأصول الدين (جامعة أم القرى). ) حيث حصل على الماجستير والدكتوراه في دراسات القرآن. مسيرته في قيادة الصلاة مليئة بالإنجازات حيث بدأ مسيرته في وقت مبكر ، عندما كان ا في أشهر ثلاثة مساجد بالمدينة المنورة (مسجد القبلتين ومسجد قباء والمسجد النبوي [مسجد النبي]). شارك ً ا كان إمام ً شاب ً 2005/1426 الشيخ عبد الله عوض الجهني في إمامة صلاة التراويح بالمسجد الحرام مع أئمة آخرين عام ثم عين إماما . أمضى الشيخ الجهني معظم حياته في خدمة كتاب الله (القرآن). حفظ 2007/1428  بالمسجد الحرام. في عام ً وخطيبا ً القرآن في صغره ثم أصبح مدرسا ة . لأشهر المساجد الإسلامي ً للقرآن بعد ذلك تخصص في دراسات القرآن وأصبح إماما ",

  urls:["https://www.youtube.com/embed/73ZQTHpe1eE","https://www.youtube.com/embed/WeU9mlMSptk"],
  urls2:["https://www.youtube.com/embed/CMMOxA8oRtQ","https://www.youtube.com/embed/ZrE_kCeNI7E","https://www.youtube.com/embed/U2rOoZ9BI8Q"]

},
{

  id: 11,
  nom: 'Cheikh salah boukhater',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615884668/salah_boukhater_ungjqr.png",
  description:"Salah Bukhatir est un réciteur et imam émiratien. Petit, Salah Bukhatir a appris le coran sous l'égide de grands savants et cheikhs à la Mecque.",

   paragrapheF:"Cheikh salah boukhater est le frère du chanteur islamique 'Ahmed Bukhater'. La belle voix de Salah Bukhatir en récitation coranique lui permet d'enregistrer des cassettes et des disques islamiques. Sa prestation en récitation coranique ressemble à celle du réciteur saoudien 'Cheikh Sudais'. Plusieurs chaines télévisées, stations radiophoniques et sites sur internet présentent sa psalmodie. Salah Bukhatir donne des conférences concernant de nombreuses questions relatives à la religion islamique. Il est imam à la mosquée 'Cheikh Saoud Al kassimi' (Charika) où il dirige les prières de Tarawih, et à la mosquée 'Al Haram Al Madani Acharif' également.",

   paragrapheA:" الشيخ صلاح بن عبد الرحمن بوخاطر   ولد الشيخ صلاح بن عبد الرحمن بوخاطر في مدينة الشرقية بدولة الإمارات العربية المتحدة في عائلة معروفة باهتمامها بالعلوم الشرعية الإسلامية والأعمال. حصل الشيخ صلاح على كليهما. تلقى الشيخ صلاح تعليمه الأساسي في إمارة الشرقية ثم أكمل دراسته الجامعية في الولايات المتحدة في كلية العلوم. أكمل حفظ القرآن بتلاوة تلاوة تامة. الشيخ صلاح هو شقيق مطرب النشيد الإسلامي الشهير (أحمد بوخاطر). ورث الشيخ صلاح حب القرآن عن جده وأصبح رجل أعمال مثل والده حيث يترأس مجموعة بوخاطر للتجارة والاستثمارات ويعمل في شركات تجارية أخرى. على الرغم من عمل الشيخ صلاح واهتماماته في التجارة والأعمال ، إلا  ا على إمامة التراويح في مسجد الشيخ سعود القاسمي في إمارة الشرقية بدولة ً ا دائم ً بصوته وكان حريص ً أنه سجل القرآن الكريم كاملا الإمارات العربية المتحدة",

  urls:["https://www.youtube.com/embed/zKrjJtGaZvs","https://www.youtube.com/embed/8QHSQmepSro"],
  urls2:["https://www.youtube.com/embed/PMvAgo8c_cY","https://www.youtube.com/embed/M27RPZVVN2c","https://www.youtube.com/embed/yQ3va7BJzB4"]

},
{

  id: 12,
  nom: 'Cheikh Idris Abkar',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615885161/SWRyaXNzIEFia2FyQDN4LnBuZw_fglqlq.png",
  description:"Cheikh Idris Abkar est l'imam de la mosquée Sheikh Zayed à Abu Dhabi, cette mosquée est l'un des sites islamiques les plus célèbres, car c'est la plus grande mosquée des Émirats arabes unis et la cinquième plus grande mosquée du monde. ",

       paragrapheF:"Cheikh Idris Abkar RÉCITATEUR DU CORAN Cheikh Idris Abkar Cheikh Idris Bin Mohammad Abkar l'une des célébrités de la récitation du Coran, Il est yéménite bien qu'il ait passé la majeure partie de sa vie en dehors du Yémen depuis sa naissance jusqu'à maintenant. Il est né en 1975/1395 à Djeddah (ville portuaire saoudienne) où il a terminé la mémorisation du Coran dans l'une de ses mosquées en seulement 4 ans, au cours de cette période, sa capacité de mémorisation, sa voix éclatante et son tajweed parfait et sa récitation étaient évidents, Sheikh Idris Abkar a une grande famille aimant le Coran et ses frères ont aussi de bonnes voix. Il a travaillé auparavant dans les écoles nationales de Siddiq pour la mémorisation du Coran, puis il a travaillé comme imam de nombreuses mosquées en Arabie saoudite comme Seliem Harby, Oseid ben Hodier, les mosquées Ibn Taymiyyah. Au Yémen, il était Imam de la mosquée Tawhid de Sanaa (la capitale du Yémen). Maintenant, cheikh Idris Abkar est l'imam de la mosquée Sheikh Zayed à Abu Dhabi, cette mosquée est l'un des sites islamiques les plus célèbres, car c'est la plus grande mosquée des Émirats arabes unis et la cinquième plus grande mosquée du monde . ",
       paragrapheA:"   الشيخ إدريس بن محمد أبكر من مشاهير تلاوة القرآن ، وهو يمني رغم أنه قضى معظم حياته خارج اليمن منذ ولادته  في جدة (مدينة ميناء المملكة العربية السعودية) حيث أنهى حفظ القرآن في أحد 1395/1975وحتى الآن. ولد عام  سنوات فقط ، وخلال هذه الفترة كانت قدرته على الحفظ والصوت المتوهج والتجويد المثالي 4مساجدها في غضون  ا في ً ا. عمل سابق ً الشيخ إدريس أبكر لديه عائلة كبيرة محبة للقرآن وإخوانه لهم أصوات طيبة أيض ، والتلاوة واضحة ، ا للعديد من المساجد في المملكة العربية السعودية مثل سليم حربي ً ثم عمل إمام ، مدارس الصديق الوطنية لتحفيظ القرآن وأوسيد بن حدير ، ومساجد ابن تيمية. في اليمن كان إمام مسجد التوحيد في صنعاء (عاصمة اليمن). الآن الشيخ إدريس .أبكر هو إمام مسجد الشيخ زايد في أبو ظبي ، هذا المسجد من أشهر المعالم الإسلامية ، حيث أنه أكبر مسجد في دولة الإمارات العربية المتحدة وخامس أكبر مسجد في العالم ",

  urls:["https://www.youtube.com/embed/3KP6CD3HmiQ","https://www.youtube.com/embed/_90Z3QLoVSc"],
  urls2:["https://www.youtube.com/embed/us7h-oKCrtA","https://www.youtube.com/embed/vl2skmv2y_c" ,"https://www.youtube.com/embed/X5rleoNukFI"]

},
{

  id: 13,
  nom: 'Cheikh Hazaa bin Abdullah',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615886198/NTc3YWQ2NjYwZTIwNTY4ZTFlYzM4OGI4YTZkM2QwZGIucG5n_ishib6.png",

  description:"Hazaa bin Abdullah bin Salem Al Balushi a commencé à mémoriser le Saint Coran quand il avait 6 ans au cours de 8 ans et a fini quand il avait quatorze ans. ",

    paragrapheF:"Hazza Al Balushi RÉCITATEUR DU CORAN Hazza Al Balushi  Hazaa bin Abdullah bin Salem Al Balushi (né en 1995) est un récitant du Noble Coran, né à Liwa Abu Dhabi. Il a commencé ses études à l'Université Sultan Qaboos par une étude des sciences économiques et politiques. Il a commencé à mémoriser le Saint Coran quand il avait 6 ans au cours de 8 ans et a fini quand il avait quatorze ans. Son père était son plus grand fan. Puis Hazza a commencé à mémoriser le Coran dans la mosquée de sa région, puis dans les mosquées des quartiers voisins, où certains des cheikhs bien connus qui avaient connaissance des récitations étaient présents. Après cela, il est allé à Makkah AlMukarramah et Al-Madinah Al-Munawwarah dans le Royaume d'Arabie Saoudite pour maîtriser la récitation et la lecture du Saint Coran et, grâce à Dieu Tout-Puissant, il a reçu une excellente note, et que C'était entre 2012 et 2013. Le début de sa renommée Sa lecture  .du Saint Coran s'est répandue en 2013 et c'était sa première diffusion, car l'un de ses amis a publié un enregistrement de sa récitation et a reçu une grande attention. Hazza Al-Balushi a accueilli dans de nombreux pays tels que la Grande-Bretagne, le Koweït, les Émirats arabes unis et le Royaume de Bahreïn pendant le mois béni du Ramadan pour amener les fidèles à prier Tarawih et à faire une invitation de certains ministères et des affaires islamiques et de ces pays.",

    paragrapheA:" بدأ بحفظ القران الكريم عندما كان في سن 6 سنوات على مدار 8 سنوات و انتهى عندما كان في الرابعة عشر من عمره. و كان والده أكبر مشجع له. و من ثم بدأ هزاع بحفظ القرآن في مسجد منطقته و من ثم في المساجد في الأحياء المجاورة و التي كان يتواجد فيها بعض الشيوخ المتقنين والذين لهم باع في علم القراءات. و من بعدها ذهب إلى مكة المكرمة و المدينة المنورة في المملكة العربية السعودية لإتقان تلاوة و قراءة القران الكريم و بفضل الله تعالى حصل على تقدير ممتاز و كان ذلك مابين عام 2012 و انتشرت قراءته للقرآن الكريم في عام 2013 و كان أول انتشار له، حيث نشر أحد من اصدقائه تسجيل تلاوة له و لقي انتباه كبير.استضيف هزاع البلوشي في العديد من الدول مثل بريطانيا و دولة الكويت ودولة الإمارات العربية المتحدة ومملكة البحرين خلال شهر رمضان المبارك لإمامة المصلين لصلاة التراويح والقيام بدعوة من بعض الوزارات و الشؤون الإسلامية و بتلك الدول",

  urls:["https://www.youtube.com/embed/tnLx7mif5Vc","https://www.youtube.com/embed/9QiTrpIOypE"],
  urls2:["https://www.youtube.com/embed/_1_w3hTJ_oA","https://www.youtube.com/embed/2w7lpTJ49Fo" ,"https://www.youtube.com/embed/DHxWSrioZ5g"]

},
{

  id: 14,
  nom: 'Cheikh Abu Bakr Al Shatri',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615888119/QWJ1IEJha3IgQWwgQ2hhdHJpQDN4LnBuZw_aavhd5.png",
  description:"Cheikh Abu Bakr Al Shatri est un récitant célèbre, il l'a mémorisée quand il était jeune et il a fait un khatma audio (récitation du Coran entier) quand il avait 20 ans.",

 paragrapheF:"Cheikh Abu Bakr Al Shatri RÉCITATEUR DU CORAN Cheikh Abu Bakr Al Shatri Cheikh Abu Bakr Al Shatri est un récitant célèbre, il est né à Djeddah (Arabie Saoudite) en 1970/1389, mais ses arrière-grands-parents sont yéménites. Il a les nationalités yéménite et britannique. Actuellement, il vit à Londres (Royaume-Uni). Cheikh Abu Bakr Al Shatri a fait ses études de base dans les écoles de Djeddah puis il a rejoint la faculté d'économie et d'administration des affaires pour obtenir le master en comptabilité. Son étude n'était pas isolée du Coran, il l'a mémorisée quand il était jeune et il a fait un khatma audio (récitation du Coran entier) quand il avait 20 ans. Sa passion pour apprendre le Coran l'a empêché de s'arrêter à ce stade, comme il l'a appris de les récitants les plus éminents du Coran comme le cheikh Ayman swed, qui est un récitant saurien spécialisé dans les dix récitations (Qira'at). Cheikh Ayman a donné au cheikh Abu Bakr Al Shatri Hafs-from-Asem ejazah (permission de lire et d'enseigner le Coran). Cheikh Abu Bakr était l'imam de nombreuses mosquées à Djeddah, l'une d'entre elles était la mosquée Alfurqan où il a travaillé pendant des années avant de partir en Grande-Bretagne après la décision du gouvernement saoudien qui a empêché les non-saoudiens d'imamat. Cheikh Al Shatri a visité de nombreux États et conduit des musulmans à Al-salat dans de grandes et célèbres mosquées comme la mosquée Masjid Al sultan Ahmed en Turquie et la mosquée Muhammad ibn Abd Alwahab au Qatar. Cheikh Al Shatri a établi un centre islamique portant son nom à Londres où il vit actuellement; ce centre est un lieu privilégié pour l'enseignement du Coran, de la langue arabe et de la religion islamique en plus des conférences et des séminaires. Cheikh Al Shatri gère et supervise lui-même ce centre et dirige les musulmans à Al-salat dans les mosquées de Londres et partage ses récitations sur ses comptes officiels sur les réseaux sociaux.",

 paragrapheA:" أبو بكر الشاطري هو الشيخ القارئ أبو بكر بن محمد الشاطري، والملقب بأبي عبد الرحمن، ولد في مدينة جدة عام 1970م، وهو يمني الجنسية، حيث عرف بحسن خلقه، وابتسامته التي لا تفارق وجه، له أربعة أبناء، وأتم ختمتين للقرآن الكريم؛ إحداهما في عام 1409هـ، والأخرى في عام 1428هـ. عرف الشاطري بأسلوبه المميز بالخشوع، والإخلاص، والتلاوة الفريدة، وخامة صوته الجميلة، بالإضافة إلى قدرته على تغيير صوته في القراءة الواحدة أكثر من مرة، لذلك لقب بالخاشع، وكان كثير البكاء في الصلوات، وتميز بقدرته على ضبط قواعد الترتيل والتجويد، كما يعد من أشهر القراء في العالم الإسلامي، حيث شارك في العديد من الندوات الإسلامية في العديد من المناطق، مثل: الكويت، والإمارات، والبحرين، وجنوب أفريقيا، وبريطانيا، وأمريكا، وأستراليا، وتركيا، وروسيا، بهدف التعريف بالقرآن الكريم والإسلام، وكانت آخر زياراته إلى قطر، حيث أمّ بالمصلين في مسجد محمد بن عبد الوهاب الذي يعد من أكبر مساجد قطر، وذلك في عام 1437هـ في رمضان، حيث صلى الكثير من الناس خلفه في ذلك الوقت؛ لأنه يتميز بقراءته الخاشعة التي تؤثر عليهم. ",

  urls:["https://www.youtube.com/embed/dYkHSWeSUSY","https://www.youtube.com/embed/adtgavUPsto"],
  urls2:["https://www.youtube.com/embed/2sK7tLflZuA","https://www.youtube.com/embed/5-pMXrapS1A" ,"https://www.youtube.com/embed/QvbggCi5Yxs?list=PLAhWQzKYYrs6FMTt-7jTEzF0iXfCOS8wj"]

},
{

  id: 15,
  nom: 'Cheikh Salman Al-Utaybi ',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615889244/salman_al_utaibi_uajwfj.jpg",
  description:"Cheikh Salman Al-Utaybi est l'un des récitants du Coran en Arabie Saoudite. Il est imam de la  mosquée Hamdan Albalawi à Riyad (la capitale de l'Arabie saoudite).",
  paragrapheF:"  Il a commencé à mémoriser le   Coran quand il était jeune dans les centres de mémorisation des mosquées, puis il a terminé la  mission lors de ses études à l'Institut scientifique de Riyad. Cheikh Salman a été influencé par d'autres récitants comme le célèbre récitateur égyptien Mahmoud Khalil Al Hosary .",

  paragrapheA:"الشيخ سلمان العتيبي هو أحد قراء القرآن في المملكة العربية السعودية. هو إمام مسجد حمدان البلوي في الرياض (عاصمة المملكة العربية السعودية). بدأ حفظ القرآن في صغره في  بالرياض  تأثر الشيخ سلمان بقراء آخرين مثل القارئ المصري الشهير محمود خليل الحصري ",

  urls:["https://www.youtube.com/embed/91c7sTfoE34","https://www.youtube.com/embed/JrNFbjseBcg"],
  urls2:["https://www.youtube.com/embed/arkzy6bGK0A","https://www.youtube.com/embed/QqO5UkaaoTQ" ]

},
{

  id: 16,
  nom: 'Cheikh Ahmad Bin Ali Al-Ajmy',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615889748/QWxpIEFqYW1pQDN4LnBuZw_ikbe7o.png",

  description:"Cheikh Ahmad Bin Ali Al-Ajmy est l'un des récitants du Saint Coran. Il est né dans le gouvernorat d'Al Khobar en Arabie Saoudite.  ",

  paragrapheF:" Cheikh Ahmad Al-Ajmy RÉCITATEUR DU CORAN Cheikh Ahmad Al-Ajmy Cheikh Ahmad Bin Ali Al-Ajmy est l'un des récitants du Saint Coran. Il est né dans le gouvernorat d'Al Khobar en Arabie Saoudite en 1388/1968. Il a mémorisé le Coran grâce à son père qui l'emmenait aux cours de Coran à Al-masjid Al-Haram chaque vacances d'été. Cheikh Ahmad Al-Ajmy a terminé ses études de base dans le gouvernorat d'Al khobar puis il a déménagé dans le gouvernorat d'Ehsaa pour rejoindre l'université Mohammad Bin Saud où il s'est spécialisé dans la charia islamique, à son université, il n'a pas ignoré le Coran, il a terminé de le mémoriser avec son étude universitaire. Cheikh Al-Ajmy, s'est rendu au Pakistan pour terminer ses études universitaires où il a obtenu une maîtrise de l'Université de Lahore, et plus tard son doctorat en interprétation du Saint Coran (Tafseer). Cheikh AlAjmy travaille à l'enseignement et parfois il dirige des musulmans à Al-salat sans travail officiel en tant qu'imam pour une mosquée spécifique en raison des circonstances de son travail et de ses multiples intérêts. La récitation de Cheikh al-Ajmy est unique et parfaite, il lit le Coran à la manière de Hafs d'Assem et il a également de nombreux albums islamiques nasheed. Cheikh Ahmad Al-Ajmy aime la littérature et en particulier la poésie, Il a écrit certains de ses nasheeds lui-même, Il a également écrit des nouvelles et des romans et a publié un livre sur le Saint Coran.",

  paragrapheA:" ولد الشيخ أحمد بن علي بن محمد آل سليمان العجمي في مدينة الخُبر في المملكة العربية السعودية عام 1968م. لمع نجمه في الإمامة وقراءة القرآن الكريم منذ أن كان عمره 17 عاماً. فكان أول مسجد صلى فيه هو مسجد العز بن عبد السلام, وبعدها بسنتين تولى الإمامة في الجامع الكبير في مدينة الخُبر. حصل على الإجازة الجامعية في الشريعة الإسلامية من جامعة الإمام محمد بن سعود الإسلامية. كما حصل على شهادة الماجستير من جامعة لاهور الحكومية بباكستان. وحصل على درجة الدكتوراه في التفسير بتقدير ممتاز، بعنوان (منَّة العلي الكبير في شرح طرق التفسير). والشيخ يُعد من القراء المشهورين في العالم الإسلامي، فقد دُعي إلى العديد من المراكز والمنتديات لقراءة القرآن الكريم.",

  urls:["https://www.youtube.com/embed/WRTpDZTK22g","https://www.youtube.com/embed/lkdMvk3CHro"],
  urls2:["https://www.youtube.com/embed/UcuDzFPzKM0","https://www.youtube.com/embed/Kll-D3aAKUA" ,"https://www.youtube.com/embed/vaqQKgbaWIA"]

},
{

  id: 17,
  nom: 'Cheikh Saoud Shuraim',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615890522/saoud-shuraim_gjrpct.png",
  description:"Saoud Shuraim est l'un des plus grands et célèbres récitateurs du saint coran, il est né en 1965 (1386 H) à Ryad (Arabie saoudite). Diplomé de l'Université d'Al Imam Mohamed Ben Saoud (Riyad).",

  paragrapheF:" Saoud Shuraim a décroché un diplôme dans 'Al Aqida wa Al Madahib Al Moassira' en 1989 (1409 H) et a obtenu le diplôme du magistrat de l'institut supérieur de la magistrature en 1993 (1413 H).   Saoud Shuraim a appris la récitation du coran sous l'égide de grands enseignants comme : Abderrahmane El Berrak, Okail Ben Abdallah, Abdallah Al Jabrayn, Abdelaziz Errajhi, Cheikh Abdelaziz Ben Baz, Fahd Al Houmain, Saleh Ibn Fawzane… Saoud Shuraim a été nommé : imam de la Sainte Mosquée par le roi d'Arabie saoudite (1992), juge à la Haute Cour Saoudienne (1993), enseignant dans la grande mosquée (1994) en plus de son obtention du doctorat de l'université 'Oum Al Qura'(1996). Saoud Shuraim est l'auteur de plusieurs œuvres islamiques comme : Al Mehdi al Mountadar dans Sunnah et Al Jamaâa, les principes de Al Fiqh : questions et réponses, procédés pour l'approbation de la descente, les dignités des prophètes.",

  paragrapheA:"الشيخ سعود الشريم إمام المسجد الحرام وأحد أبرز القراء في العالم الإسلامي. أجداده كانوا أمراء مدينة شقراء. من مواليد الرياض  1966/1386عام  لتعلم الفقه والعقيدة الإسلامية والتفسير من ً ا من نوعه حيث كان يحضر دروس ً . كان صعود الشيخ سعود فريد مشايخ   فقد أكمل حفظ القرآن بتلاوة كاملة أثناء ، ا لدراسته الأكاديمية ً كل ذلك كان موازي ، بارزين في المملكة العربية السعودية دراسته في الجامعة الإمام محمد بن سعود حيث تخصص في العقيده الإسلامية والمذاهب المعاصرة وحصل فيها على الماجستير والدكتوراه من جامعة أم القرى. كما عمل أستاذا للفقه لسنوات. درس الشيخ سعود الشريم في المعهد العالي للقضاء ، وعمل في   ثم استقال الشيخ بسبب تعدد مناصبه ووظائفه. يعود الفضل للشيخ ،  بالمحكمة والمجلس الأعلى للقضاء ً القضاء حيث عين قاضيا الشريم في إنشاء كليتين جديدتين في جامعة أم القرى حيث يعم  هاتان الكليتان هما (كلية الدراسات القضائية وكلية ، ا لها ً ل عميد الاقتصاد والتمويل الإسلامي) في محاولة جادة لتطوير الشريعة الإسلامية لتتوافق مع النظام القضائي والمالي المعاصر. بدأ الشيخ الإمامة في العديد من المساجد منذ شبابه بالتوازي مع دراسته الأكاديمية وع  للمسجد الحرام بأمر ً مل في الجامعة والقضاء. عين إماما وحتى الآن. تلاوة الشيخ سعود الشريم رائعة وصوته نقي وفريد. له مؤلفات كثيرة في الفقه والخطابات 1992/1412ملكي منذ عام والتفسير. ألقى العديد من المحاضرات في المسجد الحرام شرح فيها أهم كتب العقيدة الإسلامية والفقه إلى جانب خطب الجمعة الفريدة. ",

  urls:["https://www.youtube.com/embed/VFfmNSBYg7Y","https://www.youtube.com/embed/fsiKXwxxGzE"],
  urls2:["https://www.youtube.com/embed/XYYF0bIG4eM","https://www.youtube.com/embed/L9fz4SJkjDs" ,"https://www.youtube.com/embed/DoiNdEbAF34"]

},
{

  id: 18,
  nom: 'Cheikh Nasser Al Qatami',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615890978/bmFzc2VyIEthdGFtaUAzeC5wbmc_d3ucht.png",
  description:"Cheikh Nasser Al Qatami est l'un des récitants islamiques les plus célèbres. Il travaille dans les médias islamiques et il est l'imam de la mosquée du roi Abd Elaziz à Riyad .",

   paragrapheF:" Cheikh Nasser Al Qatami RÉCITATEUR DU CORAN Nasser Al Qatami Cheikh Nasser Al Qatami est l'un des récitants islamiques les plus célèbres.Il est né à Riyad en Arabie saoudite en 1980/1400. Il travaille dans les médias islamiques et il est l'imam de la mosquée du roi Abd Elaziz à Riyad. Il a mémorisé le Coran quand il était jeune alors que sa famille l'envoyait apprendre le Coran dans les écoles gouvernementales du Coran et dans les groupes de récitation du Coran à l'intérieur des mosquées, puis Cheikh Al Qatami a appris le tajweed et la récitation parfaite de la plupart des récitants du monde islamique. Il a également obtenu plus d'un IJajaza (permission de lire et d'enseigner le Coran) l'un d'entre eux est Hafs de la narration d'Assem par laquelle il récite toujours le Coran. Cheikh Al Qatami a étudié la charia islamique et s'est spécialisé dans les études coraniques, auxquelles il a obtenu sa maîtrise. Il a travaillé comme enseignant et superviseur dans de nombreux centres de mémorisation du Coran. Il travaille également comme imam dans de nombreuses mosquées; le dernier était la mosquée du roi Abd Allah ibn Abd Elaziz à Riyad. Cheikh Al Qatami s'intéresse aux médias islamiques alors qu'il a créé (groupe Ayat) avec Sheikh Yasser Al Dosri. Le groupe Ayat comprend: une chaîne de télévision, une station de radio, des applications islamiques pour les smartphones, une maison d'édition pour les recherches et études du Coran, un centre de développement de récitants pour l'enseignement et la mémorisation du Saint Coran en plus d'un prix décerné par le groupe dans des domaines liés au Coran et à un autre centre pour des séminaires et des conférences.",

   paragrapheA:"1400/1980 الشيخ ناصر القطامي من أشهر القراء المسلمين ، ولد في الرياض في المملكة العربية السعودية عام يعمل في الإعلام الإسلامي وهو إمام مسجد الملك عبدالعزيز بالرياض. حفظ القرآن في صغره حيث أرسلته أسرته لتعلم القرآن من المدارس الحكومية ومجموعات تلاوة القرآن داخل المساجد ثم تعلم الشيخ القطامي التجويد والتلاوة المثالية من أبرز القراء في العالم الإسلامي. كما حصل على أكثر من إجاز (إذن لقراءة القرآن وتعليمه) أحدها حفص عن عاصم , درس الشيخ القطامي الشريعة الإسلامية وتخصص في دراسات القرآن وحصل على درجة ً الذي يقرأ به القرآن دائم ا في ا ً ا ومشرف ً الماجستير. عمل مدرس ا في العديد من المساجد. وكان ً كما عمل إمام ، لعديد من مراكز تحفيظ القرآن الكريم آخرها مسجد الملك عبد الله بن عبد العزيز في الرياض. اهتم الشيخ القطامي بالإعلام الإسلامي حيث أسس (مجموعة آيات) مع الشيخ ياسر الدوسري. تضم مجموعة آيات: قناة تلفزيونية ، محطة إذاعية ، تطبيقات إسلامية للهواتف الذكية ، دار نشر لأبحاث ودراسات القرآن الكريم ، مركز تطوير القراء لتعليم وحفظ القرآن الكريم ، بالإضافة إلى جائزة تمنحها المجموعة في المجالات المتعلقة بالقرآن الكريم ومركز آخر. للندوات والمحاضرات" ,
  urls:["https://www.youtube.com/embed/otJnnmSPFE0","https://www.youtube.com/embed/6xwC6Vpz47U"],
  urls2:["https://www.youtube.com/embed/ytDBZW-1K50","https://www.youtube.com/embed/yEYZmfKyJuU" ,"https://www.youtube.com/embed/RYN8EHYpdvI"]

},
{

  id: 19,
  nom: 'Cheikh Khaled Al Qahtani',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615891770/Khaled_Al-Qahtani_ljoniy.png",
  description:" Khaled Al Qahtani est l'un des récitants du Coran les plus célèbres à l'intérieur et à l'extérieur de l'Arabie saoudite.Il est l'un des imams de la mosquée Abd Elrazeq Qunbr à Dammam dans la province orientale de l'Arabie saoudite où il dirige les musulmans à Salat Al-traweeh chaque Ramadan. ",

  paragrapheF:"Fondamentalement, le cheikh Khaled Al Qahtani est un homme d'affaires doté d'une grande voix; il l'a utilisé correctement avec le Coran, sa récitation est unique et émouvante en particulier avec la sikah et la saba Maqams (notes clés) alors il a capturé les cœurs par sa performance. Cheikh Khaled Al Qahtani était connu pour sa modestie et sa réticence à apparaître avec les médias, mais a beaucoup de publications et d'enregistrements audio qui sont diffusés sur de nombreuses stations de radio spécialisées dans le Saint Coran.",

  paragrapheA:"  يعد خالد القحطاني من أشهر المقرئين داخل وخارج المملكة العربية السعودية ، وهو أحد أئمة مسجد عبد الرزاق قنبر في الدمام بالمنطقة الشرقية بالمملكة العربية السعودية حيث يقود المسلمين في صلاة التراويح كل شهر رمضان. الشيخ خالد القحطاني هو في الأساس رجل أعمال ينعم بصوت رائع. استخدمها بشكل صحيح مع القرآن ، تلاوته فريدة وعاطفية لذلك استحوذ على القلوب من خلال أدائه. اشتهر الشيخ خالد القحطاني بتواضعه وعدم رغبته في الظهور مع وسائل الإعلام ، ولكن لديه الكثير من المطبوعات والتسجيلات الصوتية التي تبث على العديد من الإذاعات المتخصصة في القرآن الكريم" ,

  urls:["https://www.youtube.com/embed/INTaIE2QE1U","https://www.youtube.com/embed/6xCZYXipbC0"],
  urls2:["https://www.youtube.com/embed/arB3rq36InE","https://www.youtube.com/embed/G95soeuXsfw" ,"https://www.youtube.com/embed/vsMYOwXuH7M"]

},
{

  id: 20,
  nom: 'Cheikh Mohammed bin Ibrahim Al-Lohaidan',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615892161/QWwgTHVoYWlkYW4wM0AzeC5wbmc_n6hyzm.png",
  description:" Cheikh Mohammed bin Ibrahim Al-Lohaidan est un récitant du Coran saoudien connu pour sa belle voix et sa récitation parfaite. Le cheikh Mohammed Al-Lohaidan récite le Coran dans les récits Hafs-from-Asim et Sho'ba-from-Asim. ",

  paragrapheF:" Cheikh Mohammed Al-Lohaidan RÉCITATEUR DU CORAN Cheikh Mohammed Al-Lohaidan  Cheikh Mohammed bin Ibrahim Al-Lohaidan est un récitant du Coran saoudien connu pour sa belle voix et sa récitation parfaite. Le cheikh Mohammed Al-Lohaidan est diplômé de l’Institut supérieur de la magistrature de l’Université Imam Muhammad Bin Saud à Riyad où il a obtenu une licence et une maîtrise en politique islamique. Il travaille comme juge au Comité des griefs; l'une des institutions judiciaires affiliées au ministère de la Justice d'Arabie saoudite. Cheikh Muhammad Al-Lohaidan récite le Coran dans les récits Hafs-fromAsim et Sho'ba-from-Asim. Il a travaillé comme imam dans de nombreuses mosquées en Arabie saoudite ainsi qu'en Australie et en Grande-Bretagne. Il est maintenant Imam de la mosquée Al-Nasser dans le district d'Al-Andalus à Riyad. Cheikh Mohammed Al-Lohaidan dirige les gens à Salah à la mosquée Al-Nasser, en particulier les prières d'Isha et Fajr; ils sont diffusés régulièrement sur son compte Twitter officiel . ",
  paragrapheA:" الشيخ محمد بن إبراهيم اللحيدان مقرئ قرآني سعودي معروف بصوته الجميل وتلاوته الرائعة. تخرج الشيخ محمد اللحيدان من المعهد العالي للقضاء بجامعة الإمام محمد بن سعود بالرياض حيث حصل على درجتي البكالوريوس والماجستير في السياسة الإسلامية. يعمل قاضيا في ديوان المظالم. إحدى المؤسسات القضائية التابعة لوزارة العدل   في العديد من ً السعودية. الشيخ محمد اللحيدان يقرأ القرآن في رواية حفص عن عاصم وشعبة من عاصم. عمل إماما المساجد في السعودية وأستراليا وبريطانيا. وهو الآن إمام مسجد النصر بحي الأندلس بالرياض. الشيخ محمد اللحيدان يؤم المصلين في الصلاة بمسجد النصر وخاصة صلاة العشاء والفجر. يتم بثها على حسابه الرسمي على تويتر بانتظام. " ,
  urls:["https://www.youtube.com/embed/EXe8Vq_z3g8","https://www.youtube.com/embed/b9zfhbDXXvI"],
  urls2:["https://www.youtube.com/embed/MdLmr5Qg4KU","https://www.youtube.com/embed/AGdWubxhr1I" ,"https://www.youtube.com/embed/BG8_Uycmh0A"]

},
{

  id: 21,
  nom: 'Cheikh Abdulaziz Az-Zahrani',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615892508/ZGNlM2FmMjI2YTBiZDk2ZGEyYTMxNTFjZTRlYzczYTQucG5n_h4jknx.png",

  description:"Cheikh Abdulaziz Az-Zahrani, l'un des récitants du Coran d'Arabie saoudite et l'un des imams les plus populaires de Djeddah.",

  paragrapheF:" Cheikh Abdulaziz Az-Zahrani RÉCITATEUR DU CORAN Cheikh Abdulaziz Az-Zahrani  Son nom complet est Abdulaziz Bin Saleh Bin Ahmad Bin Muhammad Az-Zahrani, l'un des récitants du Coran d'Arabie saoudite et l'un des imams les plus populaires de Djeddah. Cheikh Abdulaziz Az-Zahrani est né en 1401 Hijry, correspondant à 1980 à Djeddah, et il a été élevé dans une famille coranique, car son père était un Hafiz du Saint Coran et c'est grâce à lui que Cheikh Abdulaziz a pu mémoriser tout le Coran seulement à l'âge de 15 ans. Il était également imam aux côtés de son frère Sheikh Abdulrahman Az-Zahrani dans une mosquée supervisée par leur père. Cheikh Abdulaziz faisait partie de ces personnes désireuses de terminer leur parcours académique avant de commencer une carrière. En effet, une fois ses études de collège et lycée terminées, il a rejoint l'Université du «Roi Abdulaziz», exactement à la faculté de lettres et d'études humanitaires de Djeddah. En outre, le récitant Abdulaziz Az-Zahrani a été scolarisé par de nombreux cheikhs, notamment son père, Sheikh Abdu Jawdah, Sheikh Mahmoud Faraj, Sheikh Abdul Kayoum Al-Sanadi, Sheikh Salim Az-Zahrani et Sheikh Walid Al Mesbahi. Après avoir obtenu son diplôme, Cheikh Abdulaziz Azzahrani a travaillé comme lecteur du Coran, parallèlement à son travail d'Imam dans la mosquée «Ibn Al Yamani» à Djeddah et de prédicateur dans la mosquée «Al Subaie» dans la même ville. En outre, il a été nommé Imam des prières «Taraweeh» dans la mosquée du roi Fahd à Djeddah .",

   paragrapheA:" اسمه الكامل عبد العزيز بن صالح بن أحمد بن محمد الزهراني ، أحد قراء القرآن في المملكة العربية السعودية ، ومن  م في جدة ، ونشأ في أسرة قرآنية ، 1980 هـ الموافق 1401أشهر الأئمة في جدة. ولد الشيخ عبد العزيز الزهراني عام حيث .   وبفضله استطاع الشيخ عبد العزيز حفظه حفظ ، ا للقرآن الكريم ً كان والده حافظ سنة. 15 فقط في سن ً القرآن كاملا  مع أخيه الشيخ عبدالرحمن الزهراني في مسجد يشرف عليه والدهما. كان الشيخ عبد العزيز من أولئك ً كما كان إماما الذين يحرصون على إكمال مسارهم الأكاديمي قبل بدء حياتهم المهنية. في الواقع ، بمجرد أن أكمل دراسته المتوسطة والثانوية ، التحق بجامعة'الملك عبد العزيز' ، بالضبط في كلية الآداب والدراسات الإنسانية بجدة. كما تعلم القارئ عبد العزيز الزهراني العديد من المشايخ أبرزهم والده الشيخ عبده جودة والشيخ محمود فرج والشيخ عبد القيوم السندي  ا للقرآن إلى جانب عمله ً والشيخ سليم الزهراني والشيخ وليد المصباحي. بعد تخرجه عمل الشيخ عبدالعزيز الزهراني قارئ  لصلاة التراويح بمسجد ً ا في مسجد السبيعي بالمدينة نفسها. كما تم تعيينه إماما ً ا في مسجد ابن اليماني بجدة وخطيب ً إمام الملك فهد بجدة. " ,
  urls:["https://www.youtube.com/embed/S8erRtdxrZE","https://www.youtube.com/embed/0J4ozuxSVZE"],
  urls2:["https://www.youtube.com/embed/hoZnVOMYudU","https://www.youtube.com/embed/I4r1oiIWOkA" ,"https://www.youtube.com/embed/PTmDrAvZ1Pk"]

},
{

  id: 22,
  nom: 'Cheikh Abdul Bari Ath Thobaity',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615892783/abdul-bari-ath-thobaity_gw5rdy.png",
  description:" Cheikh Abdul Bari Ath Thobaity ou Abdul Bari Ibn Awad Ibn Ali Ath Thobaity depuis 1414 H, il est l'un des imams de la mosquée du noble prophète à la Médine.",

  paragrapheF:" Abdul Bari Ath Thobaity ou Abdul Bari Ibn Awad Ibn Ali Ath Thobaity est un réciteur et imam saoudien, il est né en 1380 H à la Mecque. Abdul Bari Ath Thobaity a grandi et a étudié à la Mecque. Il a obtenu les diplômes universitaires et supérieurs suivants : licence en sciences de la faculté 'le roi Abd Al aziz' (Jedda) en 1405 H, diplôme supérieur en chariâ de l'université 'Umm Al Qura' (Mecque) en 1409 H et le master de la faculté de chariâ en 1415 H.   A l'age de 9 ans, Abdul Bari Ath Thobaity a travaillé en tant qu'instituteur pour l'apprentissage du saint coran à Jedda. En 1397 H, Il était imam de Tarawih durant le mois de Ramadan dans un centre islamique en Angleterre.  En 1399 H, Abdul Bari Ath Thobaity a remporté le concours international pour l'apprentissage et la récitation du saint coran organisé à la Mecque. Et depuis 1414 H, il est l'un des imams de la mosquée du noble prophète à la Médine. Abdul Bari Ath Thobaity a enregistré des cassettes regroupant ses récitations coraniques. Par ailleurs, de nombreuses chaines télévisées et radiophoniques ainsi que des sites sur internet diffusent sa psalmodie   .",

  paragrapheA:"  عبد البارئ بن عواض الثبيتي العتيبي، إمام لصلاة التراويح بالمسجد الحرام، اهتم به والده فرباه تربية صالحة، واعتنى به فألحقه بجماعة تحفيظ القرآن الكريم بجُدة؛ فحفظ القرآن الكريم، وصلى به التراويح في عدد من مساجد جُدة وعمره لا يتجاوز الرابعة عشرة، ودرس بالمدارس النظامية، ثم التحق بجامعة الإمام عبدالعزيز بجُدة، وبعد تخرجه درس دبلوم شريعة بجامعة أم القرى، وبعده حصل على درجة الماجستير، ثم الدكتوراه سنة 1419 هـ من نفس الجامعة.وللشيخ نشاط دعوي لما كان بجُدة، يتمثل في الخطابة والإرشاد والوعظ؛ حيث كان إمامًا لمسجد الراجحي بحي الثغر بجُدة.  وله مؤلفات؛ منها:'جمع مسائل حرب الكرماني عن الإمام أحمد'؛ وهي رسالة الدكتوراه، و'تحقيق جزء من حاشية البهوتي على منتهى الإرادات'.  صلى إمامًا للتراويح بالمسجد الحرام عدة سنوات، وولي إدارة مدرسة ذي النورين المتوسطة والثانوية لتحفيظ القرآن بجدة، وأخيرًا ولي إمامة وخطابة المسجد النبوي الشريف." ,
  urls:["https://www.youtube.com/embed/jtyUTDIwoyE","https://www.youtube.com/embed/h3c4EfSd_sA"],
  urls2:["https://www.youtube.com/embed/iLGbTwGkMp8","https://www.youtube.com/embed/I28468wqGfk" ,"https://www.youtube.com/embed/LahMXiX_HsQ"]

},
{

  id: 23,
  nom: 'Raad Muhammad Al-Kurdi',
  imageUrl: "https://res.cloudinary.com/dtl8igxn0/image/upload/v1615893827/YWM2MDFkYzc1MTA2MmQ0OTk0YzJjMjhmYzdiMjFmNTkucG5n_iyzdh4.png",
  description:"Raad MuhammadAl-Kurdi, récitateur du Noble Coran, Imam de la mosquée Imam Al-Shafi’i à Kirkouk et de la mosquée Ahmed Al-Habay à Dubaï.",
  paragrapheF:"Raad Mohammad al Kurdi RÉCITATEUR DU CORAN Raad Mohammad al Kurdi  Raad Muhammad Abdul Rahman Saleh Al-Kurdi, récitateur du Noble Coran, Imam de la mosquée Imam Al-Shafi’i à Kirkouk et de la mosquée Ahmed Al-Habay à Dubaï, né le 16 avril 1991 au Kurdistan, en Irak. Raad bin Muhammad Al-Kurdi est d'origine kurde qui vit dans la région du Kurdistan d'Irak et est un jeune homme de la ville de Kirkouk né en 1991, diplômé de l'Institut des prédicateurs et prédicateurs de Kirkouk en Irak, il est célèbre car il est distingué par sa voix pure et attrayante dans sa lecture du Saint Coran, qui est devenu célèbre dans tous les pays arabes et sa chaîne a atteint 171 millions de vues sur YouTube, et ses clips et enregistrements se sont répandus dans le monde entier, et il est devenu l'un des les récitants les plus importants et les plus célèbres du Saint Coran.",

  paragrapheA:"  رعد محمد عبد الرحمن صالح الكردي ، مقرئ القرآن الكريم ، وإمام مسجد الإمام الشافعي في كركوك ، ومسجد أحمد  في كردستان العراق. رعد بن محمد الكردي من اصل كردي يعيش في اقليم 1991 نيسان 16الحباي في دبي ، مواليد  ، خريج معهد الدعاة والخطباء كركوك في العراق ، 1991 كوردستان العراق وهو شاب من مدينة كركوك من مواليد اشتهر لانه يتميز بصوته النقي والجذاب في قراءته للقرآن الكريم الذي اشتهر في جميع الدول العربية وتجاوزت قناته  مليون مشاهدة وانتشرت مقاطعه وتسجيلاته في جميع أنحاء العالم ، وأصبح واحدة من أهم وأشهر 171 على يوتيوب قراء القرآن الكريم.    " ,
  urls:["https://www.youtube.com/embed/1LSKA6wWHIg","https://www.youtube.com/embed/BQAjCHxtkio"],
  urls2:["https://www.youtube.com/embed/iaacJNE_is8","https://www.youtube.com/embed/5QRVRajqAQ8" ,"https://www.youtube.com/embed/v7DKjg9I0po"]

}
  ]

}


