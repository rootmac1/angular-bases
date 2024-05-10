import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclearComponent } from './listclear.component';

describe('ListclearComponent', () => {
  let component: ListclearComponent;
  let fixture: ComponentFixture<ListclearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListclearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListclearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
