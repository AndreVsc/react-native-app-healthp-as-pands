import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    height:20,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9D9D9D',
  },
  titleBook: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:2,
    color: '#9D9D9D',
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
  containerTopBook: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerBookInfo: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  bookInfo: {
    marginRight: 15,
    alignItems:'center',
    width:50,
    justifyContent:'center',
    textAlign:'center',
  },
  bookResume:{
    flex:1,
    flexDirection:'column',
    width:120,
    height:100,
    marginBottom:10,
  },
  textResume:{
    fontSize:13,
  },
  navigationText: {
    fontSize: 16,
    textDecorationLine:'none',
    color: '#9D9D9D',
    fontWeight:'bold',
  },
  likeButton: {
    padding: 10,
  },
  navigationContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:20,
  },
  buttonNavigationLeft:{
    flex:1,
  },
  buttonNavigationRight:{
    
    flex:1,
    alignItems:'flex-end'
  }
});
