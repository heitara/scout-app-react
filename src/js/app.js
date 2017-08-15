import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import {
	Container,
	createApp,
	UI,
	View,
	ViewManager
} from 'touchstonejs';

// App Config
// ------------------------------

// const PeopleStore = require('./stores/people')
// const peopleStore = new PeopleStore()

var App = React.createClass({
	mixins: [createApp()],

	childContextTypes: {
		peopleStore: React.PropTypes.object
	},

	getChildContext () {
		return {
			peopleStore: null
		};
	},

	componentDidMount () {
		// Hide the splash screen when the app is mounted
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		}
	},

	render () {
		let appWrapperClassName = 'app-wrapper device--' + (window.device || {}).platform

		return (
			<div className={appWrapperClassName}>
				<div className="device-silhouette">
					<ViewManager name="app" defaultView="main">
						<View name="main" component={MainViewController} />
						<View name="transitions-target-over" component={require('./views/transitions-target-over')} />
					</ViewManager>
				</div>
			</div>
		);
	}
});

// Main Controller
// ------------------------------

var MainViewController = React.createClass({
	render () {
		return (
			<Container>
				{/* <UI.NavigationBar name="main" /> */}
				<ViewManager name="main" defaultView="tabs">
					<View name="tabs" component={TabViewController} />
				</ViewManager>
			</Container>
		);
	}
});

// Tab Controller
// ------------------------------

var lastSelectedTab = 'start'
var TabViewController = React.createClass({
	getInitialState () {
		return {
			selectedTab: lastSelectedTab,
			teamA : "Лудогорец",
			teamB : "Ливърпул"
		};
	},

	//handle orientation change
	handleChange() {
		var self = this;          // Store `this` component outside the callback
		// if ('onorientationchange' in window) {
		// 	console.log("attach");
			// window.addEventListener("orientationchange", function() {
			// 	// `this` is now pointing to `window`, not the component. So use `self`.
			// 	self.setState({   
			// 		orientation: !self.state.orientation
			// 	})
			// 	console.log("onorientationchange");
			// }, false);
		// } else {
		// 	console.log("unable to attach :(");
		// }

		function doOnOrientationChange() {
			var orientation =  window.orientation
			console.log("Orientation : " + orientation);
			switch(orientation) {  
			case -90:
			case 90:
				console.log('landscape');
				self.setState({   
					orientation: "landscape"
				});

				break; 
			default:
				console.log('portrait');
				self.setState({   
					orientation: "portrait"
				});
				break; 
			}
		}
  
		window.addEventListener('orientationchange', doOnOrientationChange);
	},

	componentDidMount() {
		this.handleChange();
		console.log("componentDidMount");
	},


	onViewChange (nextView) {
		lastSelectedTab = nextView

		this.setState({
			selectedTab: nextView
		});
	},

	selectTab (value, transition) {
		let viewProps;

		let transitionTo = transition || 'show-from-right';

		this.refs.vm.transitionTo(value, {
			transition: transitionTo,
			viewProps: viewProps
		});

		this.setState({
			selectedTab: value
		})
	},

	nextScreen(current, next) {
		//TODO: handle all cases here
		console.log("activate me");
		console.log("Current Screen: " + current);
		console.log("Next Screen: " + next);


		switch (current) {
			case "start":
		//		console.log("Current Screen: " + current);
				// console.log("Next Screen: " + next);
				// this.setState({selectedTab: "list-simple"});
				// this.selectTab(next);
				this.selectTab("team-a");
				break;
			
			
			default:

				this.selectTab(next);
				break;
		}
	},

	render () {

		console.log("render");
		console.log("Orientation: "+ this.state.orientation);
		
		let selectedTab = this.state.selectedTab
		console.log(JSON.stringify(this.state))
		let selectedTabSpan = selectedTab

		console.log(selectedTabSpan);

		if (selectedTab === 'lists' || selectedTab === 'list-simple' || selectedTab === 'list-complex' || selectedTab === 'list-details') {
			selectedTabSpan = 'lists';
		}

		if (selectedTab === 'transitions' || selectedTab === 'transitions-target') {
			selectedTabSpan = 'transitions';
		}

		return (
			<Container>
				<ViewManager ref="vm" name="tabs" defaultView={selectedTab} onViewChange={this.onViewChange}>
					<View name="start" component={require('./views/pitch')} nextHandler={this.nextScreen}/>

					<View name="tactics" component={require('./views/tactics')} nextHandler={this.nextScreen}/>

					<View name="team-a" component={require('./views/team')} 
						nextHandler={this.nextScreen}
						teamName={this.state.teamA} 
						screenId="team-a" nextScreenId="team-b"/>

					<View name="team-b" component={require('./views/team')} 
						nextHandler={this.nextScreen}
						teamName={this.state.teamB}
						screenId="team-a" nextScreenId="main-screen"	/>


					<View name="main-screen" component={require('./views/main')} 
						nextHandler={this.nextScreen}
						gameInfo={{teamA : this.state.teamA, teamB : this.state.teamB}}
						screenId="main-screen" nextScreenId="final-stats"	/>

					<View name="final-stats" component={require('./views/stats')} 
						nextHandler={this.nextScreen}
						stats={{teamA : this.state.teamA, teamB : this.state.teamB}}
						screenId="final-stats" nextScreenId="report"	/>
					
					<View name="report" component={require('./views/report')} 
						nextHandler={this.nextScreen}
						stats={{teamA : this.state.teamA, teamB : this.state.teamB}}
						screenId="report" nextScreenId="thanks"	/>

					<View name="thanks" component={require('./views/thanks')} 
						/>

					
				</ViewManager>
			</Container>
		);
	}
});

function startApp () {
	if (window.StatusBar) {
		window.StatusBar.styleDefault();
	}
	ReactDOM.render(<App />, document.getElementById('app'));
}

if (!window.cordova) {
	startApp();
} else {
	document.addEventListener('deviceready', startApp, false);
}
