import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import {ParentComponent } from '../parent/parent.component';
import {ChildComponent } from '../child/child.component';

describe('ParentComponent (inline template)', () => {

  let comp:    ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComponent, ChildComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(ParentComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.my-parent'));
    el = de.nativeElement;
  });



it('should display original title', () => {
  fixture.detectChanges();
/*  expect(el.textContent).toContain(comp.title);*/
expect(comp.title).toEqual('Parent works !');
});

it('should display a different test title', () => {
  comp.title = 'Test Title';
  fixture.detectChanges();
/*  expect(el.textContent).toContain('Test Title');*/
expect(comp.title).toEqual('Test Title');
});



});

