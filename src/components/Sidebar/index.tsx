import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, State, GestureHandlerGestureEvent } from 'react-native-gesture-handler';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

import { handleEmailPress, handleGitHubPress, handleLinkedInPress, handleVersionPress } from './actions';
import { SidebarProps } from './props';
import { styles } from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width;


export const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const translateX = useSharedValue(visible ? 0 : SCREEN_WIDTH);

  React.useEffect(() => {
    translateX.value = withSpring(visible ? 0 : SCREEN_WIDTH, {
      damping: 20,
      stiffness: 90,
      mass: 1,
    });
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const onGestureEvent = (event: GestureHandlerGestureEvent) => {
    if (event.nativeEvent.state === State.END) {
      onClose();
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.sidebar, animatedStyle]}>
        <View>
          <TouchableOpacity style={styles.header} onPress={onClose}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
            <Text style={styles.closeText}> Settings</Text>
            <View></View>
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <Text style={styles.labelOpition}>about me</Text>
          <TouchableOpacity style={styles.option} onPress={handleLinkedInPress}>
            <FontAwesome name="linkedin-square" size={40} color="#5181c0" />
            <Text style={styles.text}>Linkedin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={handleGitHubPress}>
            <FontAwesome name="github-square" size={40} color="#434343" />
            <Text style={styles.text}>Github</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={handleEmailPress}>
            <FontAwesome6 name="square-envelope" size={40} color="#CC8069" />
            <Text style={styles.text}>Email</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.options}>
          <Text style={styles.labelOpition}>logout</Text>
          <TouchableOpacity style={styles.option} onPress={handleVersionPress}>
            <FontAwesome6 name="square-font-awesome" size={40} color="#D9D07D" />
            <Text style={styles.text}>Version</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <FontAwesome6 name="square-xmark" size={40} color="#D66565" />
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fotter}>
            <Text style={styles.copy}>Desenvolvido por André Victor Soares Castro.</Text>
            <Text style={styles.copy}>Copyright © 2024 - Todos os direitos reservados.</Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};
