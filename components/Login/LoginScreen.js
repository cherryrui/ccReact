import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput
} from 'react-native';
import styles from './LoginStyle.js';
import commonStyles from '../../AppStyle.js';
import Storage from '../../Util/Storage.js';
import {
	Button,
	Toast
} from 'antd-mobile';
class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			password: "",
		};
	}

	handleClick = () => {
		if (this.state.account && this.state.password) {
			Storage.set('user', {
				id: 1,
				name: "王小明",
				shop: "大上海维修点"
			})
			Storage.get('user').then(user => {
				console.log(34, user);
			})
			this.props.navigation.navigate("Home");
		} else {
			Toast.fail('请输入账号和密码', 2);
		}
	}
	updateText = (info) => {

	}
	render() {
		return <View style={styles.continner}>
			<Text>登录</Text>
			<TextInput
		        style={[commonStyles.input,styles.input]}
		        placeholder="账号"
		        onChangeText={(account) => this.setState({account})}
		        underlineColorAndroid="transparent"
		        value={this.state.text}
		    />
		    <TextInput
		        style={[commonStyles.input,styles.input]}
		        placeholder="密码"
		        onChangeText={(password) => this.setState({password})}
		        value={this.state.text}
		    />
		    <Button type="primary" style={[commonStyles.buttonBlack,styles.button]} onClick={this.handleClick}>登录</Button>
		</View>
	}
}
export default LoginScreen;