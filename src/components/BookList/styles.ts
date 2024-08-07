import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'#c4c4c4',
  },
  titleBook: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#9D9D9D',
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
  containerTopBook: {
    flexDirection: 'row',
    justifyContent:'flex-end',

  },
  containerBookInfo: {
    flexDirection: 'column',
    maxHeight:300,
  },
  bookInfo: {
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    gap:5,
  },
  bookResume:{
    flexDirection:'column',
    alignSelf:'center',
    width:280,
    height:95,
    textAlign:'justify',
    overflow:'scroll',
    marginTop:10,
  },
  textResume:{
    fontSize:13,
    textAlign:'justify',
  },
  navigationText: {
    fontSize: 14,
    textDecorationLine:'none',
    color:'#c4c4c4',
    fontWeight:'bold',
  },
  likeButton: {
    marginRight:5,
  },
  navigationContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
  },
  buttonNavigationLeft:{
    flex:1,
  },
  buttonNavigationRight:{
    flex:1,
    alignItems:'flex-end'
  }
});
