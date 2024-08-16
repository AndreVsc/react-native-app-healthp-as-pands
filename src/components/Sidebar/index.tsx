import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, State, GestureHandlerGestureEvent } from 'react-native-gesture-handler';
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { SidebarProps } from './props';
import { styles } from './styles';
import { handleEmailPress, handleGitHubPress, handleLinkedInPress, handleVersionPress } from './actions';
import { useAuth } from '../../contexts/AuthContext';
import CustomButton from '../Buttons';

export const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
  const { signOut } = useAuth();
  const translateX = useSharedValue(visible ? 0 : Dimensions.get('window').width);

  React.useEffect(() => {
    translateX.value = withSpring(visible ? 0 : Dimensions.get('window').width, {
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

  const handleLogout = async () => {
    await signOut();
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
        <ScrollView>
        <View style={styles.options}>
          <Text style={styles.labelOpition}>about me</Text>
          <CustomButton
            iconName="linkedin-square"
            iconColor="#5181c0"
            text="Linkedin"
            onPress={handleLinkedInPress}
            iconLibrary="FontAwesome" 
          />
          <CustomButton
            iconName="github-square"
            iconColor="#434343"
            text="Github"
            onPress={handleGitHubPress}
            iconLibrary="FontAwesome" 
          />
          <CustomButton
            iconName="square-envelope"
            iconColor="#CC8069"
            text="Email"
            onPress={handleEmailPress}
            iconLibrary="FontAwesome6" 
          />
        </View>
        <View style={styles.options}>
          <Text style={styles.labelOpition}>logout</Text>
          <CustomButton
            iconName="square-font-awesome"
            iconColor="#D9D07D"
            text="Version"
            onPress={handleVersionPress}
            iconLibrary="FontAwesome6" 
          />
          <CustomButton
            iconName="square-xmark"
            iconColor="#D66565"
            text="Logout"
            onPress={handleLogout}
            iconLibrary="FontAwesome6" 
          />

        </View>
        </ScrollView>
        <View style={styles.fotter}>
          <Text style={styles.copy}>Desenvolvido por André Victor Soares Castro.</Text>
          <Text style={styles.copy}>Copyright © 2024 - Todos os direitos reservados.</Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};
