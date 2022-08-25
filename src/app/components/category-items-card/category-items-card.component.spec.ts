import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemsCardComponent } from './category-items-card.component';

describe('CategoryItemsCardComponent', () => {
  let component: CategoryItemsCardComponent;
  let fixture: ComponentFixture<CategoryItemsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryItemsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
