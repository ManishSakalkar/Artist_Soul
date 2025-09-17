import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLovedCreationsComponent } from './most-loved-creations.component';

describe('MostLovedCreationsComponent', () => {
  let component: MostLovedCreationsComponent;
  let fixture: ComponentFixture<MostLovedCreationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostLovedCreationsComponent]
    });
    fixture = TestBed.createComponent(MostLovedCreationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
