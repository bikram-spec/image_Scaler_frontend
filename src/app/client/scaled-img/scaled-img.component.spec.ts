import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaledImgComponent } from './scaled-img.component';

describe('ScaledImgComponent', () => {
  let component: ScaledImgComponent;
  let fixture: ComponentFixture<ScaledImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaledImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaledImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
