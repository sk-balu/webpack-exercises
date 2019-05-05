
/* 
  1. THIS SIMPLY EXPLAINS INVOKING OTHER MODULE'S METHOD
*/
/*   import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
  }

  document.body.appendChild(component()); */


/* 
  2. THIS EXPLAINS HOW SYNCHRONOUSLY IMPORT MODULES
*/

// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
//   document.body.appendChild(component);
// });


/* 
  3. THIS EXPLAINS HOW ASYNCHRONOUSLY IMPORT MODULES
*/

async function getComponent() {
  const element = document.createElement("div");
  const {default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});