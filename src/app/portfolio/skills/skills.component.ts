import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any;
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {

    this.skills = this.portfolioService.skills()
  }

}
