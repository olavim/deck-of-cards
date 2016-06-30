import React from 'react';
import AutosizeTextarea from 'react-autosize-textarea';

export default class InputRow extends React.Component {
	static propTypes = {
		value: React.PropTypes.string
	};

	render() {
		return (
			<div className="input-row">
				{this.props.children}
				<div className="input-div">
					<AutosizeTextarea defaultValue={this.props.value} />
				</div>
			</div>
		);
	}
}
