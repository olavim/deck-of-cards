import React from 'react';
import classes from './PlusButton.scss';

export default class PlusButton extends React.Component {
	render() {
		let onClick = this.props.onClick || (() => {});
		return (
			<div className={classes['plusButton']} onClick={onClick.bind(this)} style={this.props.style}>
				<span>{this.props.children}</span>
			</div>
		);
	}
}
