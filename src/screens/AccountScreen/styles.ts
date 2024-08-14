import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{

  },
  allNavbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    padding:20,
  },
  accountNavbar:{
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    gap:30,
  },
  navbar:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:30,
  },
  options: {
    padding: 5,
    alignItems: 'center',
    width:'100%',
  },
  labelOpition: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#a4a4a4',
    marginBottom: 8,
    fontSize: 13,
  },
  optionsItems:{
    width:'80%',
  },
  acountNavbarItems:{
    backgroundColor:'#fff',
    padding:15,
    paddingBottom:0,
    borderRadius:10,
    overflow:'hidden',
  },
});69