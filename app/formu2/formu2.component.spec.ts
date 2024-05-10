import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formu2Component } from './formu2.component';

describe('Formu2Component', () => {
  let component: Formu2Component;
  let fixture: ComponentFixture<Formu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Formu2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Formu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
