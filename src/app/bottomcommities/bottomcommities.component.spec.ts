import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomcommitiesComponent } from './bottomcommities.component';

describe('BottomcommitiesComponent', () => {
  let component: BottomcommitiesComponent;
  let fixture: ComponentFixture<BottomcommitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomcommitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomcommitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
