import React from 'react';
import { View , Text} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

import { ButtonBack } from '../../components/ButtonBack';

import { styles } from "./styles";
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/Buttons';

export function AccountScreen({ navigation }: any) {

  function Navbar(){
    return(
      <View style={styles.allNavbar}>
        <ButtonBack navigation={navigation} color={'#000'} />
        <View style={styles.accountNavbar}>
          <View style={styles.acountNavbarItems}>
            <FontAwesome6 name="user-large" size={100} color="#728FD6" />
          </View>
          <Text style={{fontWeight:'500' , color: '#474747'}}>Username</Text>
        </View>
        <View></View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <ScrollView>
        <View style={styles.options}>
        <View style={styles.optionsItems}>
          <Text style={styles.labelOpition}>about me</Text>
          <CustomButton
            iconName="linkedin-square"
            iconColor="#5181c0"
            text="Email"
            onPress={()=>{}}
            iconLibrary="FontAwesome" 
          />
          <CustomButton
            iconName="linkedin-square"
            iconColor="#5181c0"
            text="Phone Number"
            onPress={()=>{}}
            iconLibrary="FontAwesome" 
          />
        </View>
        <View style={styles.optionsItems}>
          <Text style={styles.labelOpition}>about me</Text>
          <CustomButton
            iconName="linkedin-square"
            iconColor="#5181c0"
            text="Height"
            onPress={()=>{}}
            iconLibrary="FontAwesome" 
          />
          <CustomButton
            iconName="linkedin-square"
            iconColor="#5181c0"
            text="Weight"
            onPress={()=>{}}
            iconLibrary="FontAwesome" 
          />
          <CustomButton
            iconName="linkedin-square"
            iconColor="#5181c0"
            text="Age"
            onPress={()=>{}}
            iconLibrary="FontAwesome" 
          />
        </View>
        <View style={styles.optionsItems}>
          <Text style={styles.labelOpition}>about me</Text>
          <CustomButton
            iconName="linkedin-square"
            iconColor="#5181c0"
            text="Delete"
            onPress={()=>{}}
            iconLibrary="FontAwesome" 
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}