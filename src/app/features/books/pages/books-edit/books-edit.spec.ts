import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksEdit } from './books-edit';

describe('BooksEdit', () => {
  let component: BooksEdit;
  let fixture: ComponentFixture<BooksEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
