import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyles}>
			<ActivityIndicator size={size || 'large'} />
		</View>
	);
};

const styles = {
	spinnerStyles: {
		flex: 1,
		justifyConteny: 'center',
		alignItems: 'center'
	}
};

export default Spinner;
