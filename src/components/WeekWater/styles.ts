import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerWeekDay:{
    backgroundColor:"#f1f1f1",
    width:25,
    height:25,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
  },

  containerWeek:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
  }
});