import './scss/app.scss';

import Nav from './components/Navigation';
import Box from './components/Box';

const app = () => {
    document.querySelector('#navigation').innerHTML = Nav();
    document.querySelectorAll('#box').forEach(function(box) {
        box.innerHTML = Box();
    });
}

app();