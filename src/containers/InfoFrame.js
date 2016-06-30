import React from 'react';
import InfoDataTab from './InfoDataTab';
import CardRulesTab from './CardRulesTab';
import TabbedComponent from './TabbedComponent';

export default class InfoFrame extends React.Component {
	render() {
		return (
			<div id="frame-info" className="frame">
				<TabbedComponent>
					<CardRulesTab title="Card Rules" dataKey="cardRules" />
					<InfoDataTab title="Categories" dataKey="categories" />
					<InfoDataTab title="Game Rules" dataKey="gameRules" />
				</TabbedComponent>
			</div>
		);
	}
}
