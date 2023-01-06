import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPieTwoComponent } from './widget-pie-two.component';

describe('WidgetPieTwoComponent', () => {
  let component: WidgetPieTwoComponent;
  let fixture: ComponentFixture<WidgetPieTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPieTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetPieTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
