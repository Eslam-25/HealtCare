import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotlightComponent } from './dotlight.component';

describe('DotlightComponent', () => {
  let component: DotlightComponent;
  let fixture: ComponentFixture<DotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
