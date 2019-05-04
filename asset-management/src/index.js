import _ from 'lodash';
import './style.css';
import lazyLoadingImage from './image.js'

function component() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'Webpack!'], ', ');;
  element.classList.add('hello');

  const bgImage = new Image();
  lazyLoadingImage(bgImage);
  document.body.appendChild(bgImage);

  return element;
}

document.body.appendChild(component());