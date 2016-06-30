import React from 'react';
import AutosizeTextarea from 'react-autosize-textarea';

export default class InputRow extends React.Component {
	static propTypes = {
		value: React.PropTypes.string
	};

	render() {
		return (
			<div className="input-row">
				<AutosizeTextarea defaultValue={this.props.value} />
			</div>
		);
	}
}
