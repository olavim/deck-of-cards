import React from 'react';

export default class Tab extends React.Component {
	displayName = 'Tab';

	static propTypes = {
		children: React.PropTypes.any
	};

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
