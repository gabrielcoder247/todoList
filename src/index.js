import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, Now has imported new script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('body');

    return element;
}

document.body.appendChild(component());