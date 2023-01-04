'use strict';


const newElement = document.createElement('button');
newElement.setAttribute('user-id', 11);
newElement.classList.add('.button');
newElement.innerText = 'Button';
document.querySelector('.test').appendChild(newElement);

