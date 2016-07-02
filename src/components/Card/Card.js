import React from 'react';
import classes from './Card.scss';

export default class Card extends React.Component {
	static propTypes = {
		label: React.PropTypes.string.isRequired
	};

	render() {
		return <div className={classes['card']}>{this.props.label}</div>
	}
}
