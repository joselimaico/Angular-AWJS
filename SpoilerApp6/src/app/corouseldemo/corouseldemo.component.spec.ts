import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouseldemoComponent } from './corouseldemo.component';

describe('CorouseldemoComponent', () => {
  let component: CorouseldemoComponent;
  let fixture: ComponentFixture<CorouseldemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorouseldemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorouseldemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
