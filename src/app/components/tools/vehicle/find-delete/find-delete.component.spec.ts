import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDeleteComponent } from './find-delete.component';

describe('FindDeleteComponent', () => {
  let component: FindDeleteComponent;
  let fixture: ComponentFixture<FindDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
