import React from 'react';

export default class Tab extends React.Component {
	static propTypes = {
		children: React.PropTypes.element.isRequired
	};

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
