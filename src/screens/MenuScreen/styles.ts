import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#F1F1F1',
      alignItems: 'center',
      justifyContent: 'center',
    },

    containerNavbar:{
        flex:1,
        padding:20,
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        alignSelf:'flex-start',
        maxHeight:70,
        flexDirection:'row',
    },

    containerInsightSelection:{
        flex:1, 
        flexDirection:'column',
        gap:20,
    },

    containerNavbarLeftItems:{
      flexDirection:'row',
      alignItems:'center',
      color:'#1B232F',
      gap:20
    },

    containerNavbarRigthItems:{
        alignItems:'center',
    },

    acountNavbarItems:{
      backgroundColor:'#fff',
      padding:4,
      paddingBottom:0,
      borderRadius:10,
      overflow:'hidden',
    },
    
    textNavbarItems:{
      fontSize:25,
      fontWeight:'bold',
      color:'#1B232F',
    },

  });