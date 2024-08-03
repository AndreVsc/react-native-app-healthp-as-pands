// MenuScreen.tsx
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';

// Components
import { InsightSelection } from '../../components/InsightSelection';
import { NotificationPermissionRequest } from "./NotificationPermissionRequest";

// Menu imports
import { styles } from './styles';
import { menuScreenProps } from './props';

export function MenuScreen({ navigation }: menuScreenProps) {

  function Navbar({ navigation }: menuScreenProps) {
    return (
      <>
        <View style={styles.containerNavbarLeftItems}>
          <View style={styles.acountNavbarItems}>
            <TouchableOpacity onPress={() => { navigation.navigate('Account') }}>
              <FontAwesome6 name="user-large" size={20} color="#617CA6" />
            </TouchableOpacity>
          </View>
          <Text style={styles.textNavbarItems}>Insights</Text>
        </View>
        <View style={styles.containerNavbarRigthItems}>
          <Ionicons name="settings-sharp" size={22} color="black" />
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerNavbar}>
        <Navbar navigation={navigation} />
      </View>
      <View style={styles.containerInsightSelection}>
        <InsightSelection navigation={navigation} mode={''} />
      </View>
        <NotificationPermissionRequest />
      <StatusBar style="light" />
    </View>
  );
}
