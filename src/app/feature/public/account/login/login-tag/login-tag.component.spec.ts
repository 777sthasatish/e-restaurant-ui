import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTagComponent } from './login-tag.component';

describe('LoginTagComponent', () => {
  let component: LoginTagComponent;
  let fixture: ComponentFixture<LoginTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
