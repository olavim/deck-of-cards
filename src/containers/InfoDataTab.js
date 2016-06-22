import React from 'react';
import api from '../api';
import Tab from '../components/Tab';
import InputRow from '../components/InputRow';

export default class InfoDataTab extends Tab {
	static propTypes = {
		dataKey: React.PropTypes.string.isRequired
	}

	state = {data: []};

	constructor(props) {
		super(props);
		api.getInfoData().then(response => {
			this.setState({data: response.data[props.dataKey]});
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				{
					this.state.data.map((value, index) => {
						return <InputRow value={value} key={index} />;
					})
				}
			</div>
		);
	}
}
