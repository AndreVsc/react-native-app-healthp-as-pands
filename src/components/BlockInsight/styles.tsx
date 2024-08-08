import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerBlock: {
    marginBottom: 20,
  },

  containerPrees: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2a8aaa',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 150,
  },

  containerDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    width: 315,
    height:45,
    borderRadius: 15,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  containerPractice:{
    flex:1,
    justifyContent:'flex-end',
    flexDirection: 'column', 
    backgroundColor: '#C7617F', 
    height: 195, 
    borderRadius:20,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  textPractice: {
    flexWrap: 'wrap',
    width: 200,
    color: '#ffffff',
  },

  containerImage: {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#C7617F',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap:20,
  },

  imagePractice: {
    flex:1,
    justifyContent:'space-around',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
