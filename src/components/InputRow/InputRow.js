import React from 'react';
import AutosizeTextarea from 'react-autosize-textarea';
import classes from './InputRow.scss';

export default class InputRow extends React.Component {
	static propTypes = {
		value: React.PropTypes.string,
		focus: React.PropTypes.bool,
		onBlur: React.PropTypes.func
	};

	render() {
		return (
			<div className={classes['input-row']}>
				{this.props.children}
				<div className={classes['input-div']}>
					<AutosizeTextarea autoFocus={this.props.focus}
					                  defaultValue={this.props.value}
					                  onBlur={(e) => this.props.onBlur.bind(undefined, e)()} />
				</div>
			</div>
		);
	}
}
