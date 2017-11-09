// J'importe componentFixture (le mirroir du component), testbed(le module de 
//contexte où est l'image du component créée,
// puis event emitter debug element
// jimporte mon component où ya le bouton
// describe est la description de serie de test
// elle concerne le bouton donc on l'appelle dedans

// mon fixture (mon image mirroir) sera faire avec le component où il ya le bouton
// je dois avoir accès à l'HTML avec debug

//beforeEach va définir les choses, comme quoi component est égal à ceci etc
// comme ça je peux réutiliser mes variables
// j'ai besoin dans un module, un faux module pour pouvoir les invoquer
// et où mon component pourra se greffer
// pour ça je vais utiliser TESTBED
// dans déclaration, on met tous les components, si par ex il était parent on aurait du déclarer tous les components
// on doit les compiler et les créer


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';
import { ClickComponent } from './click.component';

describe('ClickComponent', () => {
  let component: ClickComponent;
  let fixture: ComponentFixture<ClickComponent>;
  let de:      DebugElement;
  let button: HTMLElement;
  // let el:      HTMLElement;
  // const btn  = fixture.debugElement.query(By.css('button'));

  // Ici est mon faux module où je greffe mon faux component
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickComponent ]
    })
    .compileComponents();
    }));

    beforeEach(() => {
      // j'ai ici la fausse classe de mon component du bouton "clickcomponent"
      fixture = TestBed.createComponent(ClickComponent);
      // puis une fausse instance de ma classe "clickcomponent"
      // cette classe va définir un élément
      // ex: new Humain (eyes: brown) on va y donner des clés et valeurs
      component = fixture.componentInstance;
      // je vais définir mon élément de DEBUG, il n'est pas un vrai element HTML du DOM
      // pas comme récup une div avec JS, elle va juste nous permettre de query les elements
      // elle va nous permettre de regarder si les éléments sont dedans, dans l'html
      // query for the title <h1> by CSS element selector
      de = fixture.debugElement;
      button = de.query(By.css('button')).nativeElement;
      fixture.detectChanges();

    });
    
it('should create',() => {
  expect(component).toBeTruthy;
});
  
it('should create property signal as EventEmitter',() => {
  expect(component.signal instanceof EventEmitter).toBe(true);
});

it('should call onClick function on click', ()=> {
  spyOn(component, 'onClick');
  button.click();
  expect(component.onClick).toHaveBeenCalled();
});

it('should change value of yolo property', () => {
  // let button = de.query(By.css('button')).nativeElement;
  button.click();
  expect(component.yolo).toBe('YOLO');
});

it('should emit signal event when button is click', () => {
  spyOn(component.signal, 'emit');
  button.click();
  expect(component.signal.emit).toHaveBeenCalledWith('hello');
})
        // el = de.nativeElement;
    
});

// it('should', async(() => {
//   spyOn(component, 'onEditButtonClick');

//   let button = fixture.debugElement.nativeElement.querySelector('button');
//   button.click();

//   fixture.whenStable().then(() => {
//     expect(component.onEditButtonClick).toHaveBeenCalled();
//   })
// }));


