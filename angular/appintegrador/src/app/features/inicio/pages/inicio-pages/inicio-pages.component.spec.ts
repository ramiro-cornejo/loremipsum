import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPagesComponent } from './inicio-pages.component';

describe('InicioPagesComponent', () => {
  let component: InicioPagesComponent;
  let fixture: ComponentFixture<InicioPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioPagesComponent]
    });
    fixture = TestBed.createComponent(InicioPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
