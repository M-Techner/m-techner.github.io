import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellYourHorseComponent } from './sell-your-horse.component';

describe('SellYourHorseComponent', () => {
  let component: SellYourHorseComponent;
  let fixture: ComponentFixture<SellYourHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellYourHorseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellYourHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
