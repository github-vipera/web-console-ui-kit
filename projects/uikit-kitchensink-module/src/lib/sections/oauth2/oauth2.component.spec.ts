import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuth2TokensListComponent } from './oauth2.component';

describe('OAuth2TokensListComponent', () => {
  let component: OAuth2TokensListComponent;
  let fixture: ComponentFixture<OAuth2TokensListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAuth2TokensListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAuth2TokensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
