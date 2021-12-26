import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-skillspro',
  templateUrl: './skillspro.component.html',
  styleUrls: ['./skillspro.component.css']
})
export class SkillsproComponent implements OnInit {

  skillpro : string | undefined
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    this.skillpro =  this.portfolioService.skillpro
  }

}
