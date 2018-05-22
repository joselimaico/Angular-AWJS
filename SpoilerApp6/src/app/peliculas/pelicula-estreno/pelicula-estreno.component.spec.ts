import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaEstrenoComponent } from './pelicula-estreno.component';

describe('PeliculaEstrenoComponent', () => {
  let component: PeliculaEstrenoComponent;
  let fixture: ComponentFixture<PeliculaEstrenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculaEstrenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculaEstrenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
