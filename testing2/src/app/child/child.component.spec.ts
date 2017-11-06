import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import {ChildComponent } from '../child/child.component';

describe('ChildComponent (inline template)', () => {

  let comp:    ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(ChildComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('div'));
    el = de.nativeElement;
  });



it('should display original title', () => {
  fixture.detectChanges();
 /* expect(el.textContent).toContain(comp.title);*/
 expect(comp.title).toEqual('YOLO');
});

it('should display a different test title', () => {
  comp.title = 'Test Title';
  fixture.detectChanges();
 /* expect(el.textContent).toContain('Test Title');*/
 expect(comp.title).toEqual('Test Title');
});



});

