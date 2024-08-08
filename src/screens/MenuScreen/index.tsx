import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';
import { InsightSelection } from '../../components/InsightSelection';
import { Sidebar } from '../../components/Sidebar';

export const MenuScreen: React.FC = ({ navigation }: any) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      <View style={styles.containerNavbar}>
        <View style={styles.containerNavbarLeftItems}>
          <View style={styles.acountNavbarItems}>
            <TouchableOpacity onPress={() => { navigation.navigate('Account') }}>
              <FontAwesome6 name="user-large" size={20} color="#617CA6" />
            </TouchableOpacity>
          </View>
          <Text style={styles.textNavbarItems}>Insights</Text>
        </View>
        <View style={styles.containerNavbarRigthItems}>
          <TouchableOpacity onPress={toggleSidebar}>
            <Ionicons name="settings-sharp" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerInsightSelection}>
        <InsightSelection navigation={navigation}/>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};
