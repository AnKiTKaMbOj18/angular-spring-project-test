import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mobile } from '../mobile.model';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobiles: Mobile[];
  constructor(private mobileService: MobileService,private router:Router) { }

  ngOnInit() {
    this.mobileService.getMobiles()
    .subscribe(data=>{this.mobiles=data;
    });
  };

  deleteMobile(mobile:Mobile): void {
    this.mobileService.deleteMobile(mobile)
    .subscribe( data => {
      this.mobiles=this.mobiles.filter(m=>m !== mobile);
    })
  };
}
