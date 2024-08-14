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
          <Text style={styles.labelOpition}>account</Text>
          <CustomButton
            iconName="envelope"
            iconColor="#CC8069"
            text="Email"
            iconSize={35}
            onPress={()=>{}}
            iconLibrary="FontAwesome" 
          />
          <CustomButton
            iconName="square-phone"
            iconColor="#8BDC93"
            text="Phone"
            onPress={()=>{}}
            iconLibrary="FontAwesome6" 
          />
        </View>
        <View style={styles.optionsItems}>
          <Text style={styles.labelOpition}>data</Text>
          <CustomButton
            iconName="square-h"
            iconColor="#D9D07D"
            text="Height"
            onPress={()=>{}}
            iconLibrary="FontAwesome6" 
          />
          <CustomButton
            iconName="weight-scale"
            iconColor="#7E7DD9"
            text="Weight"
            iconSize={33}
            onPress={()=>{}}
            iconLibrary="FontAwesome6" 
          />
          <CustomButton
            iconName="calendar"
            iconColor="#C89A70"
            text="Age"
            onPress={()=>{}}
            iconLibrary="Ionicons" 
          />
        </View>
        <View style={styles.optionsItems}>
          <Text style={styles.labelOpition}>delete</Text>
          <CustomButton
            iconName="square-xmark"
            iconColor="#D66565"
            text="Delete"
            onPress={()=>{}}
            iconLibrary="FontAwesome6" 
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}