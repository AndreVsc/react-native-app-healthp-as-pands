import { createStackNavigator } from '@react-navigation/stack';

import { MenuScreen } from '../screens/MenuScreen';
import { WaterScreen } from '../screens/InsightScreens/WaterScreen';
import { NightScreen } from '../screens/InsightScreens/NightScreen';
import { PracticeScreen } from '../screens/InsightScreens/PracticeScreen';
import { AccountScreen } from '../screens/AccountScreen';
import { NotificationSettingsScreen } from '../screens/NotificationSettingsScreen';

const {Navigator , Screen} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Screen name="Menu" component={MenuScreen} />
      <Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <Screen name="Water" component={WaterScreen} />
      <Screen name="Night" component={NightScreen} />
      <Screen name="Practice" component={PracticeScreen} />
      <Screen name="Account" component={AccountScreen} />
    </Navigator>
  );
}