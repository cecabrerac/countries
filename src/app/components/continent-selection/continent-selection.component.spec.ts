import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentSelectionComponent } from './continent-selection.component';

describe('ContinentSelectionComponent', () => {
  let component: ContinentSelectionComponent;
  let fixture: ComponentFixture<ContinentSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContinentSelectionComponent]
    });
    fixture = TestBed.createComponent(ContinentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
