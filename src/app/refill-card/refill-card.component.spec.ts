import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillCardComponent } from './refill-card.component';

describe('RefillCardComponent', () => {
  let component: RefillCardComponent;
  let fixture: ComponentFixture<RefillCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
