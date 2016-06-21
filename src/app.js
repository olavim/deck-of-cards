require('../assets/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import DeckFrame from './containers/DeckFrame';
import InfoFrame from './containers/InfoFrame';

ReactDOM.render(
    <div>
        <DeckFrame />
        <InfoFrame />
    </div>,
    document.getElementById('app')
);
