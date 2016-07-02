import React from 'react';
import classes from './TabTitle.scss';

class TabTitle extends React.Component {
	static propTypes = {
		children: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.object
		]),
		active: React.PropTypes.bool,
		onSelect: React.PropTypes.func
	};

	render() {
		return (
			<div className={`${classes['tab']} ${this.props.active ? classes['active'] : ''}`} onClick={this.props.onSelect}>
				<span>{this.props.children}</span>
			</div>
		);
	}
}

TabTitle.defaultProps = {
	active: false,
	onClick: () => {}
};

export default TabTitle;
