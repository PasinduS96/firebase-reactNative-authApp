import React from 'react';
import ReactNative, { View } from 'react-native';
import { Text } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> {props.headerText} </Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
		shadowColor: '#000',
		shadowOffSet: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 22,
		paddingTop: 30
	}
};

export default Header;
