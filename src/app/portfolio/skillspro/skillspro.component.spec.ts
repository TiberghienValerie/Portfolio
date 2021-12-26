import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsproComponent } from './skillspro.component';

describe('SkillsproComponent', () => {
  let component: SkillsproComponent;
  let fixture: ComponentFixture<SkillsproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
