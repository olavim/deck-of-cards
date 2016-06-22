import React from 'react';
import Tab from '../components/Tab';

export default class TabbedComponent extends React.Component {
	static propTypes = {
		children: function (props, propName, componentName) {
			var error;
			var prop = props[propName];

			React.Children.forEach(prop, child => {
				if (child.type !== Tab) {
					error = new Error(
						'`' + componentName + '` only accepts children of type `Tab`. `' + child.type.displayName + '` given.'
					);
				}
			});

			return error;
		}
	};

	render() {
		React.Children.forEach(this.props.children, child => {
			console.log(child.props.title)
		});

		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
