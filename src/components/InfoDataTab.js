import React from 'react';
import InputRow from './InputRow';
import PlusButton from './PlusButton';

export default class InfoDataTab extends React.Component {
	static propTypes = {
		data: React.PropTypes.array,
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
						return <InputRow value={value} key={index} />;
					})
				}
				<PlusButton style={{marginTop: '1em'}}>New row</PlusButton>
			</div>
		);
	}
}
