import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about1 : string | undefined
  about2 : string | undefined
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit() {
    this.about1 =  this.portfolioService.about
    this.about2 =  this.portfolioService.about2
  }


}



