import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArtComponent } from './featured-art.component';

describe('FeaturedArtComponent', () => {
  let component: FeaturedArtComponent;
  let fixture: ComponentFixture<FeaturedArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedArtComponent]
    });
    fixture = TestBed.createComponent(FeaturedArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
