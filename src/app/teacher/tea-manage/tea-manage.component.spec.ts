import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaManageComponent } from './tea-manage.component';

describe('TeaManageComponent', () => {
  let component: TeaManageComponent;
  let fixture: ComponentFixture<TeaManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
