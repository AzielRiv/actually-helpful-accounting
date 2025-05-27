import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CpagraphicsComponent } from './cpagraphics.component';

describe('CpagraphicsComponent', () => {
   let component: CpagraphicsComponent;
let fixture: ComponentFixture<CpagraphicsComponent>;

   beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CpagraphicsComponent],
     }).compileComponents();

     fixture = TestBed.createComponent(CpagraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   }));

  it('should create', () => {
   expect(component).toBeTruthy();
   });
});