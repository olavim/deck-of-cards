import React from 'react';
import AutosizeTextarea from 'react-autosize-textarea';
import classes from './InputRow.scss';

export default class InputRow extends React.Component {
	static propTypes = {
		value: React.PropTypes.string
	};

	render() {
		return (
			<div className={classes['input-row']}>
				{this.props.children}
				<div className={classes['input-div']}>
					<AutosizeTextarea defaultValue={this.props.value} />
				</div>
			</div>
		);
	}
}
