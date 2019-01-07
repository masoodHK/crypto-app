import { createAppContainer, createStackNavigator } from 'react-navigation'

import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen'

const mainNavigator = createStackNavigator({
    Main: MainScreen,
    Details: DetailScreen
}, { headerMode: "none" });

export default createAppContainer(mainNavigator);