import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../components/colors';


const { width, height } = Dimensions.get('window');
const cardStyles = StyleSheet.create({
  card: {
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.02,
    width: width  * 0.95,
    height: height * 0.28,
    backgroundColor: Colors.Shadow,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  Bcircle: {
    backgroundColor: Colors.accent,
    borderWidth: 1,
    borderColor: Colors.Mustard,
    // borderWidth: 2,
    // position: relative,
    height: height * 0.2,
    width: width * 0.4,
    borderRadius: 250,
    marginLeft: width * 0.4,
    
  },
  Scircle: {
    backgroundColor: Colors.accent,
    borderWidth: 1,
    borderColor: Colors.Mustard,
    marginTop: - height * 0.02,
    height: height * 0.1,
    width: width * 0.2,
    borderRadius: 250,
    marginLeft: width * 0.35,
    position: 'relative',
  },
  UsernameBox:{
    // borderWidth: 2,
    // borderColor: Colors.Shadow,
    position: 'relative',
    height: height * 0.05,
    width: width * 0.9,
    // backgroundColor: Colors.White,
    marginTop: - height * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Username: {
    color: Colors.background,
    fontWeight: 'bold',
  },
  ServiceNameBox:{
    marginTop: height * 0.0006,
    marginLeft: width * 0.005,
  },
  ServiceName:{},


});

export default cardStyles;
