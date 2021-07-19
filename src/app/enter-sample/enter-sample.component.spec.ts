import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterSampleComponent } from './enter-sample.component';

describe('EnterSampleComponent', () => {
  let component: EnterSampleComponent;
  let fixture: ComponentFixture<EnterSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
