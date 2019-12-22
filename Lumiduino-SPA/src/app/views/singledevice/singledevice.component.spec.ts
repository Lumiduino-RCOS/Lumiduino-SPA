import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledeviceComponent } from './singledevice.component';

describe('SingledeviceComponent', () => {
  let component: SingledeviceComponent;
  let fixture: ComponentFixture<SingledeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingledeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingledeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
