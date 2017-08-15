import Container from 'react-container';
import React from 'react';

module.exports = React.createClass({

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
            </Container>
		);
	}
});