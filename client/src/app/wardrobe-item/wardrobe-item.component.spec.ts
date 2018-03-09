import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobeItemComponent } from './wardrobe-item.component';

describe('WardrobeItemComponent', () => {
  let component: WardrobeItemComponent;
  let fixture: ComponentFixture<WardrobeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardrobeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardrobeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
