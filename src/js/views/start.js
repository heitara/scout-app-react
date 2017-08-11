import Container from 'react-container';
import React from 'react';
import { Link, UI } from 'touchstonejs';
import { Button, ButtonToolbar } from 'react-bootstrap';

module.exports = React.createClass({
	statics: {
		navigationBar: 'main',
		
		getNavigation () {
			return {
				title: 'Start'
			}
		}
	},

	screenId : "start",
	screenNextId : "tactics",
	// add handler
	click (data) {
		//console.log("Click " + data);
		this.props.nextHandler(this.screenId , this.screenNextId);
	},

	render: function () {
		return (
			<Container fill={true} scrollable>
				<UI.Group>
					<UI.GroupHeader>Start</UI.GroupHeader>
					<UI.GroupBody>
						<UI.GroupInner>
							<p>This is the very first screen. We should add some welcome text in here...</p>
						</UI.GroupInner>
					</UI.GroupBody>
				</UI.Group>
				<ButtonToolbar>
					<Button bsStyle="primary" onClick={this.click.bind(this, 'test data')} >Default button</Button>
					<Button>Default button</Button>
    			</ButtonToolbar>
			</Container>
		);
	}
});
