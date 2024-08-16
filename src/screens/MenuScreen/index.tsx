import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { styles } from './styles';
import { InsightSelection } from '../../components/InsightSelection';
import { Sidebar } from '../../components/Sidebar';

export const MenuScreen: React.FC = ({ navigation }: any) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const checkAndRequestNotificationPermissions = async () => {
    const { granted, ios } = await Notifications.getPermissionsAsync();

    // For iOS: Check provisional authorization
    if (ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL) {
      return;
    }

    if (granted) {
      return;
    }

    const { status } = await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowAnnouncements: true,
      },
    });

    if (status !== 'granted') {
      Alert.alert(
        'Permissões de Notificação',
        'Este aplicativo precisa de permissões de notificação para funcionar corretamente. Por favor, habilite as permissões nas configurações.',
        [{ text: 'OK', onPress: () => navigation.navigate('NotificationSettings') }]
      );
    }
  };

  useEffect(() => {
    checkAndRequestNotificationPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />
      <View style={styles.containerNavbar}>
        <View style={styles.containerNavbarLeftItems}>
          <View style={styles.acountNavbarItems}>
            <TouchableOpacity onPress={() => { navigation.navigate('Account') }}>
              <FontAwesome6 name="user-large" size={27} color="#617CA6" />
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
        <InsightSelection navigation={navigation} />
      </View>
      <StatusBar style="dark" />
    </View>
  );
};
