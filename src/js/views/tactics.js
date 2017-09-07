import Container from 'react-container';
import React from 'react';
import { Link, UI } from 'touchstonejs';
import { Button, ButtonToolbar } from 'react-bootstrap';

module.exports = React.createClass({
	statics: {
		navigationBar: 'main',
		getNavigation () {
			return {
				title: 'Tactics'
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
                <section className="Pitch">
                    <div className="Pitch--field left">
                        <div className="penalty-area">
                        </div>
                    </div>
                    <div className="Pitch--field right">
                        <div className="penalty-area">
                        </div>
                    </div>
                    <div className="center-circle"></div>
                </section>
				<Button bsStyle="primary" onClick={this.click.bind(this, 'test data')} >Next</Button>
			</Container>
		);
	}
});
