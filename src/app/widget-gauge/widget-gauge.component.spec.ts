import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGaugeComponent } from './widget-gauge.component';

describe('WidgetGaugeComponent', () => {
  let component: WidgetGaugeComponent;
  let fixture: ComponentFixture<WidgetGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetGaugeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
