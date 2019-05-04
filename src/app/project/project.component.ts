import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../shared/portfolio';

const PORTFOLIOS: Portfolio[] = [
  {
    id: '0',
    name: 'Sales Traker',
    image: './assets/images/SalesTracker_small.png',
    category: 'Android',
    description: 'This is an android application designed specifically to send information to a server through internet access. It reads dumpsys file to retrieve IMEI information.',
    url: 'https://github.com/shwetastha/sales_tracker'
  },
  {
    id: '1',
    name: 'Premium SMS',
    image: './assets/images/Premium_SMS_small.png',
    category: 'Android',
    description: 'This android application send SMS to subscribe and unsubscribe various services provided by the network. This application was made specifically for MediaTek android devices, using the MediaTek Inc. SDK [MediaTek Add-On:19].',
    url: 'https://github.com/shwetastha/premiumsms'
  },
  {
    id: '2',
    name: 'Clothing Store',
    image: './assets/images/ClothingStore-JavaFX_small.png',
    category: 'JavaFX',
    description: 'This project is for the submission of the final assignment of JAV745. This application is a small demo that works as an inventory system for a Clothing Store to keep track of the Products.',
    url: 'https://github.com/shwetastha/ClothingStore-JavaFX'
  },
  {
    id: '3',
    name: 'Clothing Store',
    image: './assets/images/ClothingStore-Website_small.png',
    category: 'HTML, CSS, PHP, JavaScript',
    description: 'This website is a project completed for the course ULI705. This website is a mockup of a simple clothing store website.',
    url: 'https://github.com/shwetastha/ClothingStore-Website'
  }
 ];

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  portfolios= PORTFOLIOS;
  selectedPortfolio: Portfolio = PORTFOLIOS[0];

  constructor() { }

  ngOnInit() {
  }

}
