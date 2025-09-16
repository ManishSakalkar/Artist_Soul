import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArtCarouselComponent } from './featured-art-carousel.component';

describe('FeaturedArtCarouselComponent', () => {
  let component: FeaturedArtCarouselComponent;
  let fixture: ComponentFixture<FeaturedArtCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedArtCarouselComponent]
    });
    fixture = TestBed.createComponent(FeaturedArtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
