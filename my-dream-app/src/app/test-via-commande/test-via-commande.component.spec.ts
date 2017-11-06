import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestViaCommandeComponent } from './test-via-commande.component';

describe('TestViaCommandeComponent', () => {
  let component: TestViaCommandeComponent;
  let fixture: ComponentFixture<TestViaCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestViaCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestViaCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
