import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education :any
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.education =  this.portfolioService.education()
  }
}
