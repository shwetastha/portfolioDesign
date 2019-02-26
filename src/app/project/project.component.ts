import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../shared/portfolio';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  portfolios: Portfolio[] = [
    {
      id: '0',
      name: 'Sales Traker',
      image: '/assets/imgaes/SalesTracker.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      // tslint:disable-next-line:max-line-length
      description: 'This is an android application designed specifically to send information to a server through internet access. This application sends Imei no, Model no, Operator and Country_iso of android smart phone to server, which uses the following url "http://xxx.xxx.xxx.xx/sales_tracker/insert.php". It reads dumpsys file to retrieve IMEI information.'
    },
    {
      id: '1',
      name: 'Premium SMS',
      image: '/assets/imgaes/Premium_SMS.png',
      category: 'appetizer',
      featured: false,
      label: '',
      description: 'This android application send SMS to subscribe and unsubscribe various services provided by the network. This application was made specifically for MediaTek android devices, using the MediaTek Inc. SDK [MediaTek Add-On:19].'
    }
   ];

  constructor() { }

  ngOnInit() {
  }

}
