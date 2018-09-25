import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReceiveComponent } from './customer-receive.component';

describe('CustomerReceiveComponent', () => {
  let component: CustomerReceiveComponent;
  let fixture: ComponentFixture<CustomerReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
