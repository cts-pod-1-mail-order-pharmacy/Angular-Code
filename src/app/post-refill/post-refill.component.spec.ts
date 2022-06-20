import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRefillComponent } from './post-refill.component';

describe('PostRefillComponent', () => {
  let component: PostRefillComponent;
  let fixture: ComponentFixture<PostRefillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRefillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
