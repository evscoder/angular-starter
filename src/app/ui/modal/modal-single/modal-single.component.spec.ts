import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSingleComponent } from './modal-single.component';

describe('ModalSingleComponent', () => {
  let component: ModalSingleComponent;
  let fixture: ComponentFixture<ModalSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
