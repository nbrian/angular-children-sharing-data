import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualOverrideComponent } from './manual-override.component';

describe('ManualOverrideComponent', () => {
  let component: ManualOverrideComponent;
  let fixture: ComponentFixture<ManualOverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualOverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
