import React from 'react';
import { View, Text, Button, Platform, Linking, Alert } from 'react-native';
import { styles } from './styles';

export function NotificationSettingsScreen() {
  const openNotificationSettings = async () => {
    try {
      if (Platform.OS === 'android') {
        await Linking.openSettings();
      } else {
        await Linking.openSettings();
      }
    } catch (error) {
      console.error('Failed to open settings:', error);
      Alert.alert('Erro', 'Não foi possível abrir as configurações.');
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
