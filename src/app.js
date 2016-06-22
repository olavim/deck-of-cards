import React from 'react';
import ReactDOM from 'react-dom';
import DeckFrame from './containers/DeckFrame';
import InfoFrame from './containers/InfoFrame';

require('../assets/style.scss');

ReactDOM.render(
	<div>
		<DeckFrame />
		<InfoFrame />
	</div>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept();
}
