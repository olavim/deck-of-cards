import React from 'react';
import api from '../api';
import Tab from '../components/Tab';
import InputRow from '../components/InputRow';

export default class InfoDataTab extends Tab {
	static propTypes = {
		dataKey: React.PropTypes.string.isRequired
	};

	state = {data: []};

	constructor(props) {
		super(props);
		this.fetchData();
	}

	async fetchData() {
		let data = (await api.getInfoData()).data;
		this.setState({data: data[this.props.dataKey]});
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
