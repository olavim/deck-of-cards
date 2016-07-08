import React from 'react';
import InputRow from './InputRow';
import PlusButton from './PlusButton';

export default class InfoDataTab extends React.Component {
	static propTypes = {
		data: React.PropTypes.array,
		onEditRow: React.PropTypes.func,
		onAddRow: React.PropTypes.func,
		children: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.object
		])
	};

	render() {
		return (
			<div>
				{
					this.props.data.map((value, index) => {
						return <InputRow focus={!value}
						                 value={value}
						                 key={index}
						                 onBlur={this.props.onEditRow.bind(undefined, index)} />;
					})
				}
				<PlusButton style={{marginTop: '1em'}} onClick={this.props.onAddRow}>New row</PlusButton>
			</div>
		);
	}
}
