import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrltesterComponent } from './urltester.component';

describe('UrltesterComponent', () => {
  let component: UrltesterComponent;
  let fixture: ComponentFixture<UrltesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrltesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrltesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
