import React from 'react';

export default class InputRow extends React.Component {
	static propTypes = {
		value: React.PropTypes.string
	};

	render() {
		return (
			<div className="input-row">
				<input type="text" defaultValue={this.props.value} />
			</div>
		);
	}
}
