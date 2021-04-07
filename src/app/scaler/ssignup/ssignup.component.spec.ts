import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsignupComponent } from './ssignup.component';

describe('SsignupComponent', () => {
  let component: SsignupComponent;
  let fixture: ComponentFixture<SsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
