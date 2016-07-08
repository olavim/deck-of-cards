import React from 'react';
import classes from './TabContent.scss';

export default class TabContent extends React.Component {
	static propTypes = {
		children: React.PropTypes.any
	};

	render() {
		return <div className={classes['tab-content']}>{this.props.children}</div>;
	}
}
