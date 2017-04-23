import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaStarupComponent } from './idea-starup.component';

describe('IdeaStarupComponent', () => {
  let component: IdeaStarupComponent;
  let fixture: ComponentFixture<IdeaStarupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaStarupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaStarupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
