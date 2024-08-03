// NotificationPermissionRequest.tsx
import React, { useEffect, useState } from 'react';
import { Alert, Button, View, Text, Platform, Linking } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

export function NotificationPermissionRequest() {
  const [permissionStatus, setPermissionStatus] = useState<string>('unknown');

  useEffect(() => {
    (async () => {
      await requestPermissions();
    })();
  }, []);

  const requestPermissions = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      setPermissionStatus(finalStatus);

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permissões de Notificação',
          'Precisamos de permissão para enviar notificações. Sem isso, você não receberá atualizações importantes.',
          [
            {
              text: 'Abrir Configurações',
              onPress: () => {
                if (Platform.OS === 'android') {
                  // Usando o pacote 'react-native-device-info' para obter o package name
                  Linking.openSettings().catch((error) => {
                    console.error('Failed to open settings:', error);
                  });
                } else {
                  Linking.openSettings().catch((error) => {
                    console.error('Failed to open settings:', error);
                  });
                }
              },
            },
            { text: 'OK' }
          ]
        );
      }
    } else {
      Alert.alert(
        'Notificações',
        'Somente dispositivos físicos podem receber notificações.',
        [{ text: 'OK' }]
      );
    }
  };

  return <></>;
}
