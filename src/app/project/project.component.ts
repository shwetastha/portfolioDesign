import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../shared/portfolio';

const PORTFOLIOS: Portfolio[] = [
  {
    id: '0',
    name: 'Sales Traker',
    image: './assets/images/SalesTracker.png',
    category: 'Android',
    description: 'This is an android application designed specifically to send information to a server through internet access. This application sends Imei no, Model no, Operator and Country_iso of android smart phone to server, which uses the following url "http://xxx.xxx.xxx.xx/sales_tracker/insert.php". It reads dumpsys file to retrieve IMEI information.'
  },
  {
    id: '1',
    name: 'Premium SMS',
    image: './assets/images/Premium_SMS.png',
    category: 'Android',
    description: 'This android application send SMS to subscribe and unsubscribe various services provided by the network. This application was made specifically for MediaTek android devices, using the MediaTek Inc. SDK [MediaTek Add-On:19].'
  },
  {
    id: '2',
    name: 'Clothing Store Inventory Management System(JavaFX)',
    image: './assets/images/ClothingStore-JavaFX.png',
    category: 'JavaFX',
    description: 'This project is for the submission of the final assignment of JAV745. This application is a small demo that works as an inventory system for a Clothing Store to keep track of the Products.'
  },
  {
    id: '3',
    name: 'Clothing Store (Website)',
    image: './assets/images/Premium_SMS.png',
    category: 'HTML, CSS, PHP, JavaScript',
    description: 'This website is a project completed for the course ULI705. This website is a mockup of a simple clothing store website. HTML and CSS is used for the design and display while PHP is use to fetch all the data from the MySQL Database. Javascript has been used for simple validations when adding new items.'
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
