import _ from 'lodash';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click moi and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    document.body.appendChild(canvas);
  
    return element;
  }
  
  document.body.appendChild(component());