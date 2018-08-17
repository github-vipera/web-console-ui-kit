import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySimpleTestModuleComponent } from './my-simple-test-module.component';

describe('MySimpleTestModuleComponent', () => {
  let component: MySimpleTestModuleComponent;
  let fixture: ComponentFixture<MySimpleTestModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySimpleTestModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySimpleTestModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
