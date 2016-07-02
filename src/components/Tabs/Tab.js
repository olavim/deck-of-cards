import React from 'react';
import TabTitle from './TabTitle';
import TabContent from './TabContent'

export default class Tab extends React.Component {
	static propTypes = {
		children: function(props, propName, componentName) {
			let prop = props[propName];
			let error;

			if (React.Children.count(prop) !== 2) {
				error = new Error(
					`\`${componentName}\` requires a single \`TabTitle\` and \`TabContent\` component as its children.`
				);
			}

			React.Children.forEach(prop, child => {
				if (error) return;

				if (child.type !== TabTitle && child.type !== TabContent) {
					console.log(child.type, TabTitle)
					error = new Error(
						`\`${componentName}\` only accepts a single \`TabTitle\` and \`TabContent\` component as its children.`
					);
				}
			});

			return error;
		}
	};

	render() {
		return <div>{this.props.children}</div>;
	}
}
