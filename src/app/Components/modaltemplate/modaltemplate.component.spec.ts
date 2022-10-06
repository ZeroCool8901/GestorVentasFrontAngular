import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltemplateComponent } from './modaltemplate.component';

describe('ModaltemplateComponent', () => {
  let component: ModaltemplateComponent;
  let fixture: ComponentFixture<ModaltemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaltemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaltemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
