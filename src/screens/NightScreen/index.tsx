import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { ButtonBack } from '../../components/ButtonBack';
import { NightButtons } from '../../components/NightButtons';
import { BookList } from '../../components/BookList';
import { HourInfo } from '../../components/HourInfo';
import { styles } from './styles';
import { LightInTheDark } from '../../components/LightInTheDark';

export const NightScreen = ({ navigation }: any) => {
  const [setting, setSetting] = useState<boolean>(true);

  const settingClosed = () => {
    return setSetting(false);
  };

  const settingOpen = () => {
    return setSetting(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBack}>
        <ButtonBack navigation={navigation} />
        <Text style={styles.textMenuBack}>Night</Text>
      </View>
      <View style={styles.containerTopNight}>
        <HourInfo dataMode={true} />
      </View>
      <View style={styles.containerNight}>
        <View style={styles.containerNightButton}>
          <NightButtons setting={setting} open={settingOpen} closed={settingClosed} />
        </View>
        <View style={styles.containerSettingsNight}>
          {setting ? <BookList /> : <LightInTheDark />}
        </View>
      </View>
    </View>
  );
};
