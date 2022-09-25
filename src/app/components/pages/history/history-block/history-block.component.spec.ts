import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryBlockComponent } from './history-block.component';

describe('HistoryBlockComponent', () => {
  let component: HistoryBlockComponent;
  let fixture: ComponentFixture<HistoryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
