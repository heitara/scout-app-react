import Container from 'react-container';
import React from 'react';
import { Link, UI } from 'touchstonejs';
import { Button, ButtonToolbar } from 'react-bootstrap';

module.exports = React.createClass({
	statics: {
		navigationBar: 'main',
		
		getNavigation () {
			return {
				title: 'Thank you!'
			}
		}
	},

	click (data) {
		//TODO: refresh everything
	},

	render: function () {
		return (
			<Container fill={true} scrollable>
				<UI.Group>
					<UI.GroupHeader>Thank you!</UI.GroupHeader>
					<UI.GroupBody>
						<UI.GroupInner>
							<p>Thank you for using the "Scout App"! Any feedback is appreaciated!</p>
						</UI.GroupInner>
					</UI.GroupBody>
				</UI.Group>
				<Button bsStyle="primary" onClick={this.click.bind(this, 'test data')}>Start over!</Button>
			</Container>
		);
	}
});
