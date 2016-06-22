import React from 'react';
import Tab from '../components/Tab';

export default class TabbedComponent extends React.Component {
	static propTypes = {
		children: (props, propName, componentName) => {
			let error;
			const prop = props[propName];

			React.Children.forEach(prop, child => {
				if (child.type !== Tab) {
					error = new Error(
						`\`${componentName}\` only accepts children of type \`Tab\`. \` ${child.type.displayName} \` given.`
					);
				}
			});

			return error;
		}
	};

	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		}
	}

	changeTab(tabIndex) {
		this.setState({activeTab: tabIndex});
	}

	render() {
		let data = React.Children.map(this.props.children, child => {
			return {
				title: child.props.title,
				content: child.props.children
			}
		});

		return (
			<div className="tabbed">
				<div>
					{
						data.map((tab, index) => {
							let isActive = this.state.activeTab === index;
							let className = "tab-title" + (isActive ? " active" : "");
							return (
								<div className={className} key={index} onClick={this.changeTab.bind(this, index)}>
									<span>{tab.title}</span>
								</div>
							)
						})
					}
				</div>
				<div className="tab-content">
					{data[this.state.activeTab].content}
				</div>
			</div>
		);
	}
}
