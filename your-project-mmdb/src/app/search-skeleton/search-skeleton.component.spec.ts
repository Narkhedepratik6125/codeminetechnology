import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSkeletonComponent } from './search-skeleton.component';

describe('SearchSkeletonComponent', () => {
  let component: SearchSkeletonComponent;
  let fixture: ComponentFixture<SearchSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
