import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWorkComponent } from './modal-work.component';

describe('ModalWorkComponent', () => {
  let component: ModalWorkComponent;
  let fixture: ComponentFixture<ModalWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
