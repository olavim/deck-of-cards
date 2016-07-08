import React from 'react';
import Frame from '../components/Frame';
import InfoDataTab from '../components/InfoDataTab';
import CardRulesTab from '../components/CardRulesTab';
import Tabs, {Tab, TabTitle, TabContent} from '../components/Tabs';
import api from '../api';

export default class InfoFrame extends React.Component {
	state = {tabs: [{
		title: '',
		data: []
	}]};

	constructor(props) {
		super(props);
		this.fetchData();
	}

	async fetchData() {
		let data = (await api.getInfoData()).data;
		this.setState({tabs: data.tabs});
	}

	async editRowData(tabIndex, rowIndex, e) {
		let newData = e.target.value;
		let response = await api.editInfoData(tabIndex, rowIndex, newData);

		let newState = Object.assign({}, this.state);
		if (newData) {
			newState.tabs[tabIndex].data[rowIndex] = newData;
		} else if (tabIndex !== 0) {
			newState.tabs[tabIndex].data.splice(rowIndex, 1);
		}

		this.setState(newState);
	}

	async addRow(tabIndex) {
		let response = await api.addInfoData(tabIndex);

		let newState = Object.assign({}, this.state);
		newState.tabs[tabIndex].data.push('');
		this.setState(newState);
	}

	render() {
		const tabs = this.state.tabs;

		return (
			<Frame id="frame-info">
				<Tabs>
					<Tab>
						<TabTitle>{tabs[0].title}</TabTitle>
						<TabContent>
							<CardRulesTab data={tabs[0].data} onEditRow={this.editRowData.bind(this, 0)} />
						</TabContent>
					</Tab>
					{tabs.slice(1).map((tab, i) => (
						<Tab key={i}>
							<TabTitle>{tab.title}</TabTitle>
							<TabContent>
								<InfoDataTab data={tab.data}
		                         onEditRow={this.editRowData.bind(this, i+1)}
		                         onAddRow={this.addRow.bind(this, i+1)} />
							</TabContent>
						</Tab>
					))}
				</Tabs>
			</Frame>
		);
	}
}
