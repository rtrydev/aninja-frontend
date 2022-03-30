import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeListItemComponent } from './anime-list-item.component';

describe('AnimeListItemComponent', () => {
  let component: AnimeListItemComponent;
  let fixture: ComponentFixture<AnimeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
