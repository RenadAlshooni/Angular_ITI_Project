import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturdPost } from './featurd-post';

describe('FeaturdPost', () => {
  let component: FeaturdPost;
  let fixture: ComponentFixture<FeaturdPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturdPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturdPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
