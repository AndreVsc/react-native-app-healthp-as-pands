import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MenuScreen } from '../screens/MenuScreen';
import { WaterScreen } from '../screens/WaterScreen';
import { NightScreen } from '../screens/NightScreen';
import { PracticeScreen } from '../screens/PracticeScreen';
import { AccountScreen } from '../screens/AccountScreen';
import { NotificationSettingsScreen } from '../screens/NotificationScreen';

const {Navigator , Screen} = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>
      <Screen name="Menu" component={MenuScreen} />
      <Screen name="NotificationSettings" component={NotificationSettingsScreen} />
      <Screen name="Water" component={WaterScreen} />
      <Screen name="Night" component={NightScreen} />
      <Screen name="Practice" component={PracticeScreen} />
      <Screen name="Account" component={AccountScreen} />
    </Navigator>
  );
}