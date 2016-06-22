import React from 'react';
import Tab from '../components/Tab';
import TabbedComponent from './TabbedComponent';

export default class InfoFrame extends React.Component {
	render() {
		return (
			<div id="frame-info" className="frame">
				<TabbedComponent>
					<Tab title="Card Rules">Card Rules - content</Tab>
					<Tab title="Categories">Categories - content</Tab>
					<Tab title="Game Rules">Game Rules - content</Tab>
				</TabbedComponent>
			</div>
		);
	}
}
