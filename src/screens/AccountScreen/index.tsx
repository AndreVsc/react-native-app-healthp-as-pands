import React from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { ButtonBack } from '../../components/ButtonBack';
import { styles } from "./styles";
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/Buttons';
import { useAuth } from '../../contexts/AuthContext';

export function AccountScreen({ navigation }: any) {
  const { user, loading, deleteUser, signOut } = useAuth();

  function Navbar() {
    return (
      <View style={styles.allNavbar}>
        <ButtonBack navigation={navigation} color={'#000'} />
        <View style={styles.accountNavbar}>
          <View style={styles.acountNavbarItems}>
            <FontAwesome6 name="user-large" size={100} color="#728FD6" />
          </View>
          <Text style={{ fontWeight: '500', color: '#474747' }}>
            {loading ? 'Loading...' : user?.nome || 'User'}
          </Text>
        </View>
        <View></View>
      </View>
    );
  }

  const handleDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              deleteUser();
              await signOut();
            } catch (error) {
              console.error('Error deleting user:', error);
              Alert.alert('Error', 'Failed to delete user. Please try again.');
            }
          }
        }
      ]
    );
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#728FD6" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Navbar />
      </View>
      <ScrollView>
        <View style={styles.options}>
          <View style={styles.optionsItems}>
            <Text style={styles.labelOpition}>Account</Text>
            <CustomButton
              iconName="envelope"
              iconColor="#CC8069"
              text="Email"
              text2={user?.email || 'Not provided'}
              iconSize={35}
              onPress={() => {}}
              iconLibrary="FontAwesome"
            />
          </View>
          <View style={styles.optionsItems}>
            <Text style={styles.labelOpition}>Data</Text>
            <CustomButton
              iconName="hand-holding-water"
              iconColor="#6AA2D7"
              text="Cup size"
              iconSize={33}
              onPress={() => {}}
              iconLibrary="FontAwesome5"
            />
            <CustomButton
              iconName="weight-scale"
              iconColor="#7E7DD9"
              text="Weight"
              iconSize={33}
              text2={user?.peso || 'Not provided'}
              onPress={() => {}}
              iconLibrary="FontAwesome6"
            />
            <CustomButton
              iconName="calendar"
              iconColor="#C89A70"
              text="Age"
              text2={user? `${user.idade} years` : 'Not provided'}
              onPress={() => {}}
              iconLibrary="Ionicons"
            />
          </View>
          <View style={styles.optionsItems}>
            <Text style={styles.labelOpition}>Delete</Text>
            <CustomButton
              iconName="square-xmark"
              iconColor="#D66565"
              text="Delete"
              onPress={handleDelete}
              iconLibrary="FontAwesome6"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
