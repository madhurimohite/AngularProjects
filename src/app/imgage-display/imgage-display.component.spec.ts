import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgageDisplayComponent } from './imgage-display.component';

describe('ImgageDisplayComponent', () => {
  let component: ImgageDisplayComponent;
  let fixture: ComponentFixture<ImgageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgageDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
