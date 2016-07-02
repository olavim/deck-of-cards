import React from 'react';
import Frame from '../components/Frame';
import InfoDataTab from '../components/InfoDataTab';
import CardRulesTab from '../components/CardRulesTab';
import Tabs, {Tab, TabTitle, TabContent} from '../components/Tabs';
import api from '../api';

export default class InfoFrame extends React.Component {
	state = {
		tabs: [
			{
				title: '',
				data: []
			}
		]
	};

	constructor(props) {
		super(props);
		this.fetchData();
	}

	async fetchData() {
		let data = (await api.getInfoData()).data;
		this.setState({tabs: data.tabs});
	}

	render() {
		const tabs = this.state.tabs;

		return (
			<Frame id="frame-info">
				<Tabs>
					<Tab>
						<TabTitle>{tabs[0].title}</TabTitle>
						<TabContent><CardRulesTab data={tabs[0].data} /></TabContent>
					</Tab>
					{tabs.slice(1).map((tab, i) => (
						<Tab key={i}>
							<TabTitle>{tab.title}</TabTitle>
							<TabContent><InfoDataTab data={tab.data} /></TabContent>
						</Tab>
					))}
				</Tabs>
			</Frame>
		);
	}
}
