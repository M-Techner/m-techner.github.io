import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAHorseComponent } from './buy-a-horse.component';

describe('BuyAHorseComponent', () => {
  let component: BuyAHorseComponent;
  let fixture: ComponentFixture<BuyAHorseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyAHorseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyAHorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
