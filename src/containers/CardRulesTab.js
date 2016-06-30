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
							<div key={index}>
								<div className="card-value">{this.cards[index]}</div>
								<InputRow value={value} />
							</div>
						);
					})
				}
			</div>
		);
	}
}
