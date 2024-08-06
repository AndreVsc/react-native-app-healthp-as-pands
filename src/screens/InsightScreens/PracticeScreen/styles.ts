import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#C7617F'
  },

  buttonText:{

  },
  textStatusTimer: {
    color: "#ffffff",
    fontSize: 15,
  },

  button:{

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
    padding: 10,
    paddingLeft:35,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    maxHeight: 180,

  },

  timerText: {
    fontSize: 40,
    color: '#ffffff',
  },

  containerPracticeSettings: {
    flex: 1,
    alignItems: 'center',
  },

  containerPractice: {
    flex: 1,
    backgroundColor: '#fff',
    width: "80%",
    maxHeight: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft:40,
    paddingRight:40,
    flexDirection: 'row',
    borderRadius: 20,
  },
});
