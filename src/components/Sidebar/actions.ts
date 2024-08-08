import {Alert, Linking } from 'react-native';

const APP_VERSION = '1.0.0';

export const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/andre-victor-castro');
};

export const handleGitHubPress = () => {
    Linking.openURL('https://github.com/AndreVsc');
  };

export const handleEmailPress = () => {
    Linking.openURL('mailto:vsandre40@gmail.com');
};

export const handleVersionPress = () => {
    Alert.alert('App Version', `${APP_VERSION} Release`);
};