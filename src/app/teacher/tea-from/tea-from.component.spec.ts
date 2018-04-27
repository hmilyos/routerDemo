import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaFromComponent } from './tea-from.component';

describe('TeaFromComponent', () => {
  let component: TeaFromComponent;
  let fixture: ComponentFixture<TeaFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
