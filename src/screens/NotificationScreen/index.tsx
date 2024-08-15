import React from 'react';
import { View, Text, Button, Platform, Linking } from 'react-native';
import { styles } from './styles';

export function NotificationSettingsScreen() {
  const openNotificationSettings = async () => {
    if (Platform.OS === 'android') {
      // Abre as configurações do aplicativo para Android
      try {
        await Linking.openSettings();
      } catch (error) {
        console.error('Failed to open settings:', error);
      }
    } else {
      // Abre as configurações do aplicativo para iOS
      try {
        await Linking.openSettings();
      } catch (error) {
        console.error('Failed to open settings:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de Notificação</Text>
      <Text style={styles.message}>
        Para receber notificações importantes, você precisa ativar as permissões de notificação para este aplicativo.
      </Text>
      <Button
        title="Abrir Configurações"
        onPress={openNotificationSettings}
      />
    </View>
  );
}
