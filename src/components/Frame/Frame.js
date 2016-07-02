import React from 'react';
import classes from './Frame.scss';

export default class Frame extends React.Component {
	static propTypes = {
		children: React.PropTypes.any
	};

	render() {
		return <div className={classes['frame']}>{this.props.children}</div>
	}
}
