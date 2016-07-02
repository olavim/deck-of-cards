import React from 'react';
import InfoDataTab from './InfoDataTab';
import InputRow from './InputRow';
import Card from './Card';

export default class CardRulesTab extends InfoDataTab {
	cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', '?'];

	render() {
		return (
			<div>
				{
					this.props.data.map((value, index) => {
						return (
							<InputRow value={value} key={index}>
								<Card label={this.cards[index]} />
							</InputRow>
						);
					})
				}
			</div>
		);
	}
}
