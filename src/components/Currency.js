import React from 'react'
import { Text, View } from 'react-native'
import styled from "styled-components";

import Bold from './Bold'
import CurrencyName from './CurrencyName'
import Button from './Button'

const CurrencyView = styled(View)`
    padding-top:10px;
    padding: 15px;
    background: #F0F0F0;
    margin: 10px;
    font-size: 10px
`

const Currency = ({ data, onPress }) => (
    <CurrencyView>
        <CurrencyName>{data.name}</CurrencyName>
        <Text><Bold>Rank:</Bold> {data.rank}</Text>
        <Text><Bold>Price:</Bold> {data.price_usd} USD</Text>
        <Text><Bold>Market Cap:</Bold> {data.market_cap_usd} USD</Text>
        <Text><Bold>Available Supply:</Bold> {data.available_supply} {data.symbol}</Text>
        <Button onPress={onPress} Text="Show Details"/>
    </CurrencyView>
)

export default Currency;