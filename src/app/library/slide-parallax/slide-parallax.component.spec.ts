import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideParallaxComponent } from './slide-parallax.component';

describe('SlideParallaxComponent', () => {
  let component: SlideParallaxComponent;
  let fixture: ComponentFixture<SlideParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
