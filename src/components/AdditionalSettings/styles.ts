import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerSettings: {
    backgroundColor:'#fff',
    padding:30,
    paddingTop:30,
    borderRadius:20,
    marginTop:20,
    width:325,
    maxHeight:300,  
  },
  imagePractice: {
    justifyContent:'space-around',
    alignSelf:'center',
    width: 110,
    height: 110,
    resizeMode: 'contain', 
    marginBottom: 20,
  },
  exerciseTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color:'#c4c4c4',
  },
  exerciseTime: {
    fontSize: 12,
    fontWeight:'bold',
    color:'#c4c4c4',
  },
  exerciseDescription: {
    textAlign:'justify',
    fontSize: 12,
    color: '#333',
  },
  notFoundText: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});