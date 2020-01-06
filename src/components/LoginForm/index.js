import React, { Component } from 'react';
import { TextInput, Text } from 'react-native';
import firebase from 'firebase';

import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';
import Input from '../Input';
import Spinner from '../Spinner';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password).then(this.onLoginSuccess.bind(this)).catch(() => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(this.onLoginSuccess.bind(this))
				.catch(this.onLoginFail.bind(this));
		});
	}

	renderButton() {
		if (this.state.loading == true) {
			return <Spinner size="small" />;
		}

		return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}
	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						autoCorrection={false}
						placeholder="user@test.com"
						label="Email"
						value={this.state.email}
						onChangeText={(email) => this.setState({ email: email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						placeholder="Password"
						label="Password"
						value={this.state.passworf}
						onChangeText={(password) => this.setState({ password: password })}
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				<CardSection>{this.renderButton()}</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
