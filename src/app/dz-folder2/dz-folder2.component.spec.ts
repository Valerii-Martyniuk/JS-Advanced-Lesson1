import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzFolder2Component } from './dz-folder2.component';

describe('DzFolder2Component', () => {
  let component: DzFolder2Component;
  let fixture: ComponentFixture<DzFolder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzFolder2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DzFolder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
