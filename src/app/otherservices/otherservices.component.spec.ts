import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherservicesComponent } from './otherservices.component';

describe('OtherservicesComponent', () => {
  let component: OtherservicesComponent;
  let fixture: ComponentFixture<OtherservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherservicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
