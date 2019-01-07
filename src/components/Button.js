import React from 'react'
import { TouchableOpacity, Text } from "react-native";
import styled from 'styled-components'

const ButtonWrapper = styled(TouchableOpacity)`
    padding: 10px;
`

const ButtonText = styled(Text)`
    text-align:center;
    font-weight: bold;
`

export default Button = ({onPress, Text}) => (
    <ButtonWrapper onPress={onPress}>
        <ButtonText>{Text}</ButtonText>
    </ButtonWrapper>
)