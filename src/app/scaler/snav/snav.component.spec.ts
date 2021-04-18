import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnavComponent } from './snav.component';

describe('SnavComponent', () => {
  let component: SnavComponent;
  let fixture: ComponentFixture<SnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
