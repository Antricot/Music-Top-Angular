import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTopComponent } from './song-top.component';

describe('SongTopComponent', () => {
  let component: SongTopComponent;
  let fixture: ComponentFixture<SongTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SongTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SongTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
