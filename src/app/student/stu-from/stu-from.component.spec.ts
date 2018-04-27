import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuFromComponent } from './stu-from.component';

describe('StuFromComponent', () => {
  let component: StuFromComponent;
  let fixture: ComponentFixture<StuFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
