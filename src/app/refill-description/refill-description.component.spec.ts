import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillDescriptionComponent } from './refill-description.component';

describe('RefillDescriptionComponent', () => {
  let component: RefillDescriptionComponent;
  let fixture: ComponentFixture<RefillDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
