import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter, DebugElement } from '@angular/core';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let html: HTMLElement;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    html = debug.query(By.css('button')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create property signal as EventEmitter', () => {
    expect(component.signal instanceof EventEmitter).toBe(true);
});

it('should call onClick function on click', ()=> {
  spyOn(component, 'onClick');
  html.click();
  expect(component.onClick).toHaveBeenCalled();
});

});
