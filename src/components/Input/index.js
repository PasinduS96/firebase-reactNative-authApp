import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	return (
		<View style={styles.congtainerStyles}>
			<Text style={styles.labelStyles}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				style={styles.inputStyles}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
			/>
		</View>
	);
};

const styles = {
	inputStyles: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyles: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	congtainerStyles: {
		height: 40,
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row'
	}
};

export default Input;
