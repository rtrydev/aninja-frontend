import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeTopListItemComponent } from './anime-top-list-item.component';

describe('AnimeTopListItemComponent', () => {
  let component: AnimeTopListItemComponent;
  let fixture: ComponentFixture<AnimeTopListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeTopListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeTopListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
