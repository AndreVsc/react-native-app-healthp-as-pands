import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2a8aaa'
  },
  
  containerBack: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'center',
    gap: 10,
    maxHeight: 80,
    width: "100%",
  },

  textMenuBack: {
    flex: 1,
    color: "#ffffff",
    fontSize: 19,
  },

  containerTop: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxHeight: 180,
  },

  containerWeekSettings: {
    flex: 1,
    alignItems: 'center',
  },

  containerSettings: {
    backgroundColor:'#fff',
    padding:45,
    paddingTop:30,
    borderRadius:20,
    marginTop:20,
    gap:30,  
  },

  containerWeek: {
    flex: 1,
    backgroundColor: '#fff',
    width: "80%",
    maxHeight: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 20,
  },

  buttonWater: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#fff",
    padding:20,
    borderRadius:50,
  },

  containerWaterSettings:{
    flexDirection:'row',
    justifyContent:'space-between',
  },

  textWaterSettings:{
    fontSize:20,
    color:'#888',
    fontWeight:'bold',
  }
});