import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ClickComponent } from './click.component';

describe('ClickComponent', () => {
  let component: ClickComponent;
  let fixture: ComponentFixture<ClickComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  const btn  = fixture.debugElement.query(By.css('button'));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickComponent ]
    });
    
    fixture = TestBed.createComponent(ClickComponent);
    
        component = fixture.componentInstance; // BannerComponent test instance
    
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('button'));
        fixture.detectChanges();
        el = de.nativeElement;

    }));
    
});

// it('should', async(() => {
//   spyOn(component, 'onEditButtonClick');

//   let button = fixture.debugElement.nativeElement.querySelector('button');
//   button.click();

//   fixture.whenStable().then(() => {
//     expect(component.onEditButtonClick).toHaveBeenCalled();
//   })
// }));


