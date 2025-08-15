import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostPage } from './latest-post-page';

describe('LatestPostPage', () => {
  let component: LatestPostPage;
  let fixture: ComponentFixture<LatestPostPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestPostPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
