import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 290,
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
    color:'#4A7B7D',
    fontWeight:'bold',
  },
  header: {
    flexDirection:'row',
    justifyContent:'space-around',
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
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#a4a4a4',
    marginBottom: 8,
    fontSize: 13,
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
    color:'#c4c4c4',
  },

});
