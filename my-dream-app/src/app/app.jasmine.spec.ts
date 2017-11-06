import myFunctionnality from './app.jasmine';
// myFunctionnality();
describe('myFunctionnality', () => {

it('says the test is working', () => {
  let a = 4;
  expect ( myFunctionnality (a) ).toBe(6);
});
});
