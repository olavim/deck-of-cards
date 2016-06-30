import React from 'react';
import InfoDataTab from '../containers/InfoDataTab';
import InputRow from '../components/InputRow';

export default class CardRulesTab extends InfoDataTab {
	cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

	render() {
		return (
			<div>
				{
					this.state.data.map((value, index) => {
						return (
							<InputRow value={value} key={index}>
								<div className="card-value"><div>{this.cards[index]}</div></div>
							</InputRow>
						);
					})
				}
			</div>
		);
	}
}
