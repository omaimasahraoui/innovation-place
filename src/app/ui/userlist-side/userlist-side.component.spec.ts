import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistSideComponent } from './userlist-side.component';

describe('UserlistSideComponent', () => {
  let component: UserlistSideComponent;
  let fixture: ComponentFixture<UserlistSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
