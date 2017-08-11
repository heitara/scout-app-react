import Container from 'react-container';
import React from 'react';
import { Link, UI } from 'touchstonejs';
import { Button, ButtonToolbar } from 'react-bootstrap';

module.exports = React.createClass({
	statics: {
		navigationBar: 'main',
		
		getNavigation () {
			return {
				title: 'Main Screen'
			}
		}
	},

	// add handler
	click (data) {
		this.props.nextHandler(this.props.screenId , this.props.nextScreenId);
	},

	render: function () {
		return (
			<Container fill={true} scrollable>
				<UI.Group>
					<UI.GroupHeader>{this.props.title}</UI.GroupHeader>
					<UI.GroupBody>
						<UI.GroupInner>
							<p>This is {this.props.teamName}</p>
						</UI.GroupInner>
					</UI.GroupBody>
				</UI.Group>
				<Button bsStyle="primary" onClick={this.click.bind(this, 'test data')} >Next</Button>
			</Container>
		);
	}
});
