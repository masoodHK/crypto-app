import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	componentDidMount = () => {
		fetch("http://localhost:3000/api/crypto")
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Open up App.js to start working on your app!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
