import { createStackNavigator } from '@react-navigation/stack';

import { MenuScreen } from '../screens/MenuScreen';
import { WaterScreen } from '../screens/InsightScreens/WaterScreen';
import { NigthScreen } from '../screens/InsightScreens/NightScreen';
import { PracticeScreen } from '../screens/InsightScreens/PracticeScreen';

const {Navigator , Screen} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Screen name="Menu" component={MenuScreen} />
      <Screen name="Water" component={WaterScreen} />
      <Screen name="Night" component={NigthScreen} />
      <Screen name="Practice" component={PracticeScreen} />
    </Navigator>
  );
}