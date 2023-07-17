import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPagesComponent } from './listado-pages.component';

describe('ListadoPagesComponent', () => {
  let component: ListadoPagesComponent;
  let fixture: ComponentFixture<ListadoPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoPagesComponent]
    });
    fixture = TestBed.createComponent(ListadoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
