// imports from components reacts
import React from 'react';
import { View,Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Components
import { InsightSelection } from '../../components/InsightSelection';

// Menu imports
import { styles } from './styles';
import { menuScreenProps } from './props';

// Icons
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function Navbar({navigation}:menuScreenProps) {
  return (
    <>
      <View style={styles.containerNavbarLeftItems}>
        <View style={styles.acountNavbarItems}>
          <FontAwesome6 name="user-large" size={25} color="#617CA6" />
        </View>
        <Text style={styles.textNavbarItems}>Insights</Text>
      </View>
      <View style={styles.containerNavbarRigthItems}>
        <Ionicons name="settings-sharp" size={20} color="black" />
      </View>
    </>
  );
}

export function MenuScreen({navigation}:menuScreenProps) {
  return (
    <View style={styles.container}>
        <View style={styles.containerNavbar}>
            <Navbar navigation={navigation}/>
        </View>
        <View style={styles.containerInsightSelection}>
            <InsightSelection navigation={navigation} mode={''} />
        </View>
        <StatusBar style="light" />
    </View>
    
  );
}