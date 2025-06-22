import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hedear } from './header';

describe('Hedear', () => {
  let component: Hedear;
  let fixture: ComponentFixture<Hedear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hedear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hedear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
