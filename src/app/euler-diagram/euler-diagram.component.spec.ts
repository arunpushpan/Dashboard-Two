import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EulerDiagramComponent } from './euler-diagram.component';

describe('EulerDiagramComponent', () => {
  let component: EulerDiagramComponent;
  let fixture: ComponentFixture<EulerDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EulerDiagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EulerDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
