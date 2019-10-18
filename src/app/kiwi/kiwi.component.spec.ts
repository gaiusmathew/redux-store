import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiwiComponent } from './kiwi.component';

describe('KiwiComponent', () => {
  let component: KiwiComponent;
  let fixture: ComponentFixture<KiwiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiwiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiwiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
