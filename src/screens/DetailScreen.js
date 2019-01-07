import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Button from '../components/Button';
import PercentChange from '../components/PercentChange';
import CurrencyName from '../components/CurrencyName';
import Bold from '../components/Bold';

import styles from '../styles'

export default class DetailScreen extends Component {
    render() {
        const { navigation } = this.props
        const data = navigation.getParam("data")
        return (
            <View style={styles.container}>
                <CurrencyName>{data.name}</CurrencyName>
                <Text style={{ fontSize: 14 }}><Bold>Rank:</Bold> {data.rank}</Text>
                <Text style={{ fontSize: 14 }}><Bold>Price:</Bold> {data.price_usd} USD ({data.price_btc} {data.symbol})</Text>
                <Text style={{ fontSize: 14 }}><Bold>Market Cap (USD):</Bold> {data.market_cap_usd} USD</Text>
                <Text style={{ fontSize: 14 }}><Bold>Volume (24 hrs):</Bold> {data["24h_volume_usd"]} USD</Text>
                <Text style={{ fontSize: 14 }}><Bold>Available Supply:</Bold> {data.available_supply}</Text>
                <Text style={{ fontSize: 14 }}><Bold>Total Supply:</Bold> {data.total_supply}</Text>
                <Text style={{ fontSize: 14 }}><Bold>Maximum Supply:</Bold> {data.maximum_supply}</Text>
                <Text style={{ fontSize: 14 }}><Bold>Percent Change (1hr):</Bold> <PercentChange
                    color={data.percent_change_1h.includes("-") ?
                        "red" :
                        "#009e73"}>
                    {data.percent_change_1h}%
                                    </PercentChange>
                </Text>
                <Text style={{ fontSize: 14 }}><Bold>Percent Change (24hrs):</Bold> <PercentChange
                    color={data.percent_change_24h.includes("-") ?
                        "red" :
                        "#009e73"}>
                    {data.percent_change_24h}%
                                    </PercentChange>
                </Text>
                <Text style={{ fontSize: 14 }}><Bold>Percent Change (7 days):</Bold> <PercentChange
                    color={data.percent_change_7d.includes("-") ?
                        "red" :
                        "#009e73"}>
                    {data.percent_change_7d}%
                                    </PercentChange>
                </Text>
                <Button onPress={() => navigation.goBack()} Text="Go Back" />
            </View>
        )
    }
}
