import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAuComponent } from './detallesAu.component';

describe('DetallesAuComponent', () => {
  let component: DetallesAuComponent;
  let fixture: ComponentFixture<DetallesAuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
