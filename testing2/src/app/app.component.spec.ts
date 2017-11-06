import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { AppComponent } from './app.component';
import {ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

describe('AppComponent (inline template)', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ParentComponent, ChildComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('#my-app'));
    el = de.nativeElement;
  });



it('should display original title', () => {
  fixture.detectChanges();
  expect(el.textContent).toContain(comp.title);
});

it('should display a different test title', () => {
  comp.title = 'Test Title';
  fixture.detectChanges();
  expect(el.textContent).toContain('Test Title');
});



});

