import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasAgregadasComponent } from './peliculas-agregadas.component';

describe('PeliculasAgregadasComponent', () => {
  let component: PeliculasAgregadasComponent;
  let fixture: ComponentFixture<PeliculasAgregadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasAgregadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasAgregadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
