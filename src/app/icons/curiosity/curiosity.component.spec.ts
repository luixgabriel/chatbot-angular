import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosityComponent } from './curiosity.component';

describe('CuriosityComponent', () => {
  let component: CuriosityComponent;
  let fixture: ComponentFixture<CuriosityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuriosityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuriosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
