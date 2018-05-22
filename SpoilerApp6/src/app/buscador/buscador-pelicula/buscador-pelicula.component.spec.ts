import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPeliculaComponent } from './buscador-pelicula.component';

describe('BuscadorPeliculaComponent', () => {
  let component: BuscadorPeliculaComponent;
  let fixture: ComponentFixture<BuscadorPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
