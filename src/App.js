import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import Header from './components/header';
import LoginForm from './components/LoginForm';
import Button from './components/Button';
import Spinner from './components/Spinner';

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAaDxB8PVZ69NmXxBVF1jbgZ2gpb0z_KjM',
			authDomain: 'authentication-2d20f.firebaseapp.com',
			databaseURL: 'https://authentication-2d20f.firebaseio.com',
			projectId: 'authentication-2d20f',
			storageBucket: 'authentication-2d20f.appspot.com',
			messagingSenderId: '871163889360',
			appId: '1:871163889360:web:10ada0d2ffe421ef03c0d5',
			measurementId: 'G-FGLBQNR8JH'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Auth App" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
