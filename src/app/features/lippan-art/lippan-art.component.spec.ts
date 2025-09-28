import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LippanArtComponent } from './lippan-art.component';

describe('LippanArtComponent', () => {
  let component: LippanArtComponent;
  let fixture: ComponentFixture<LippanArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LippanArtComponent]
    });
    fixture = TestBed.createComponent(LippanArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
