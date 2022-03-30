import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeTopListComponent } from './anime-top-list.component';

describe('AnimeTopListComponent', () => {
  let component: AnimeTopListComponent;
  let fixture: ComponentFixture<AnimeTopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeTopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeTopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
