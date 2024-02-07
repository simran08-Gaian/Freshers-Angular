import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTODOComponent } from './my-todo.component';

describe('MyTODOComponent', () => {
  let component: MyTODOComponent;
  let fixture: ComponentFixture<MyTODOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTODOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTODOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
