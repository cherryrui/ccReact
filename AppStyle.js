import {
	StyleSheet
} from 'react-native';
import theme from './theme.js';
export default StyleSheet.create({
	hide: {
		height: 50,
		display: 'none'
	},
	buttonBlack: {
		backgroundColor: theme.themeColor,
		borderColor: theme.themeColor,
	},
	header: {
		elevation: 0,
		shadowOpacity: 0,
		backgroundColor: theme.navigatorColor,
	},
	tabBarIndicator: {
		height: 0,
		backgroundColor: 'red',
	},
	headerTitleStyle: {
		alignSelf: 'center',
	},
	input: {
		borderWidth: 0.5,
		borderColor: theme.borderColor,
		fontSize: 13,
		padding: 4,
	}
});