import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Alert, Linking } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, State, GestureHandlerGestureEvent } from 'react-native-gesture-handler';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const APP_VERSION = '1.0.0';

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ visible, onClose }) => {
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

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/andre-victor-castro');
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/AndreVsc');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:vsandre40@gmail.com');
  };

  const handleVersionPress = () => {
    Alert.alert('App Version', `${APP_VERSION} Release`);
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.sidebar, animatedStyle]}>
        <View>
          <TouchableOpacity style={styles.header} onPress={onClose}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
            <Text style={styles.closeText}> Settings</Text>
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
            <Text style={styles.copy}>Copyright © 2024 - Todos os direitos reservados.</Text>
            <Text style={styles.copy}>Desenvolvido por André Victor Soares Castro.</Text>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 300,
    height: '100%',
    backgroundColor: '#F1F1F1',
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    zIndex: 1000,
  },
  text:{
    color:'#7A7B7D',
    fontWeight:'bold',
  },
  header: {
    flexDirection:'row',
    justifyContent:'center',
    padding: 16,
    marginTop: 35,
    marginBottom:15,
    alignItems:'center',
  },
  closeText: {
      fontSize: 20,
      color: '#1B232F',
      fontWeight: 'bold',
      textAlign: 'center',
  },
  options: {
    padding: 16,
    alignItems: 'center',
  },
  labelOpition: {
    alignSelf: 'flex-start',
    marginLeft: 45,
    fontWeight: 'bold',
    color: '#AAAB7D',
    marginBottom: 5,
    fontSize: 12,
  },
  option: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    width: 210,
    height: 60,
    borderRadius: 20,
    gap: 15,
  },
  fotter:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-end',
    alignItems:'center',
    marginBottom:20,
  },
  copy:{
    textAlign:'center',
    fontSize:10,
    color:'#AAAB7D',
  },

});

export default Sidebar;
