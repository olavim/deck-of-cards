import React from 'react';
import ReactDOM from 'react-dom';
import DeckFrame from './containers/DeckFrame';
import InfoFrame from './containers/InfoFrame';

require('styles/style.scss');

ReactDOM.render(
	<div>
		<DeckFrame />
		<InfoFrame />
	</div>,
	document.getElementById('content')
);

if (__DEV__ && module.hot) {
	module.hot.accept();
}
