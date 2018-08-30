import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { MobileService } from '../mobile.service';
import { Mobile } from '../mobile.model';


@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {

  mobile: Mobile =new Mobile();

  constructor(private mobileService: MobileService,private router: Router) { }

  ngOnInit() {
  }

  createMobile(): void {
    this.mobileService.createMobile(this.mobile)
    .subscribe(data=>{
      alert("mobile is created successfully.");
    });
  };

}
