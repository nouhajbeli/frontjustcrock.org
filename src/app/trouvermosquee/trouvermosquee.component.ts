import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../shared/apiservice.service';
declare const PrayTimes:any
@Component({
  selector: 'app-trouvermosquee',
  templateUrl: './trouvermosquee.component.html',
  styleUrls: ['./trouvermosquee.component.css']
})
export class TrouvermosqueeComponent implements OnInit {
  constructor(private router: Router) {   }


  ngOnInit(): void {
    }

    btnClick () {
      this.router.navigateByUrl('/touvermosqueetunisie');
}
}
