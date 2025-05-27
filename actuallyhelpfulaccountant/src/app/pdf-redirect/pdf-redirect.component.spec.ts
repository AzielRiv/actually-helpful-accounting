import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PdfRedirectComponent } from './pdf-redirect.component';

describe('PdfRedirectComponent', () => {
  let component: PdfRedirectComponent;
  let fixture: ComponentFixture<PdfRedirectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PdfRedirectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
