import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNotfoundComponent } from './search-notfound.component';

describe('SearchNotfoundComponent', () => {
  let component: SearchNotfoundComponent;
  let fixture: ComponentFixture<SearchNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
