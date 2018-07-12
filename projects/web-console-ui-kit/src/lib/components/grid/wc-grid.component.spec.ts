
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WCGridComponent } from './wc-grid.component';

describe('WCGridComponent', () => {
  let component: WCGridComponent;
  let fixture: ComponentFixture<WCGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WCGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WCGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
