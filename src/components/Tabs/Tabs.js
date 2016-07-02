import React from 'react';
import Tab from './Tab'
import TabTitle from './TabTitle';
import TabContent from './TabContent';

export default class Tabs extends React.Component {
	static propTypes = {
		children: function (props, propName, componentName) {
			const prop = props[propName];
			let error;

			React.Children.forEach(prop, child => {
				if (error) return;

				if (child.type !== Tab) {
					error = new Error(`\`${componentName}\` should only have children of type \`Tab\`.`);
				}
			});

			return error;
		}
	};

	state = {activeTab: 0};

	changeTab(tabIndex) {
		this.setState({activeTab: tabIndex});
	}

	getChildContent(children, type) {
		let arr = React.Children.toArray(children);
		let titleComponent = arr.filter(c => c.type === type)[0];
		return titleComponent.props.children
	}

	render() {
		const data = React.Children.map(this.props.children, child => ({
			title: this.getChildContent(child.props.children, TabTitle),
			content: this.getChildContent(child.props.children, TabContent)
		}));

		return (
			<div className="tabs">
				<div>
					{
						data.map((tab, index) => {
							const isActive = this.state.activeTab === index;
							return (
								<TabTitle key={index} onSelect={this.changeTab.bind(this, index)} active={isActive}>
									{tab.title}
								</TabTitle>
							);
						})
					}
				</div>
				<TabContent key={this.state.activeTab}>
					{data[this.state.activeTab].content}
				</TabContent>
			</div>
		);
	}
}
