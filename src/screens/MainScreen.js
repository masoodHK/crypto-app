import React from 'react';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
const moment = require("moment");

import styles from '../styles';
import Currency from '../components/Currency'
import Bold from '../components/Bold';

export default class MainScreen extends React.Component {
	state = {
		loading: true,
		error: null,
		data: {},
		currencies: []
	}
	componentDidMount = () => {
		fetch("http://<YOUR-IP-ADDRESS>:3000/api/crypto")
			.then(res => res.json())
			.then(data => {
				this.setState({
					loading: false,
					data,
					currencies: Object.keys(data.data)
				})
			})
			.catch(error => {
				this.setState({
					loading: false,
					error
				});
			});
	}

	render() {
        const { loading, error, data, currencies } = this.state
        const { navigation } = this.props
		if(loading) {
			return (
				<View style={styles.container}>
					<ActivityIndicator animating size={75}/>
				</View>
			);	
		}
		if(error) {
			return (
				<View style={styles.container}>
					<Text>{error.toString()}</Text>
				</View>
			);	
		};
		// 
		return (
			<ScrollView>
				<View style={styles.dateContainer}>
					<Text>Date: <Bold>{moment(data.date, "MM-DD-YYYY").format("MMMM Do, YYYY")}</Bold></Text>
				</View>
                {currencies.map(currency => <Currency 
                                                key={currency} 
                                                data={data.data[currency].info} 
                                                onPress={() => navigation.navigate("Details", {
                                                    data: data.data[currency].info
                                                })}/>)}
			</ScrollView>
		);
	};
};
