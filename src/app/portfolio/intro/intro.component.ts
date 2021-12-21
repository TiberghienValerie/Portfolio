import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  cvUrl: string | undefined
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.cvUrl =  this.portfolioService.resumeurl
  }

}
