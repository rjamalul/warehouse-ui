import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateFormComponent } from './crate-form.component';

describe('CrateFormComponent', () => {
  let component: CrateFormComponent;
  let fixture: ComponentFixture<CrateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
