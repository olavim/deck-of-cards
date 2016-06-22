import React from 'react';
import TabbedComponent from './TabbedComponent';
import Tab from '../components/Tab';

export default class InfoFrame extends React.Component {
	render() {
		return (
			<div id="frame-info" className="frame">
				<TabbedComponent>
					<Tab title="Card Rules">Card Rules</Tab>
					<Tab title="Categories">Categories</Tab>
					<Tab title="Game Rules">Game Rules</Tab>
				</TabbedComponent>
			</div>
		);
	}
}
