import Container from 'react-container';
import React from 'react';
import { Link, UI } from 'touchstonejs';

module.exports = React.createClass({
	statics: {
		navigationBar: 'main',
		getNavigation () {
			return {
				title: 'Tactics'
			}
		}
	},

	render: function () {
		return (
			<Container fill={true} scrollable>
				<UI.Group>
					<UI.GroupHeader>Tactics</UI.GroupHeader>
					<UI.GroupBody>
						<UI.GroupInner>
							<p>Dummy screen</p>
						</UI.GroupInner>
					</UI.GroupBody>
				</UI.Group>
			</Container>
		);
	}
});
