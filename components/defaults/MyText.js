import { Text } from "react-native"
import { useFonts } from 'expo-font';
function whichWeight(weight) {
    if(weight === null && weight === undefined) {
        return "PoppinsRegular";
    }
    return "Poppins" + weight.charAt(0).toUpperCase() + weight.slice(1);
}
const MyText = (props) => {
    const [loaded] = useFonts({
        PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
        PoppinsThin: require('../../assets/fonts/Poppins-Thin.ttf'),
        PoppinsRegular: require('../../assets/fonts/Poppins-Regular.ttf'),
      });
    
      if (!loaded) {
        return null;
      }
    


    const styles = {
        fontFamily: props.weight === null ? "PoppinsRegular" : whichWeight(props.weight),
    };
    return <Text style={styles} className={props.customClassName}> {props.children} </Text>
}


export default MyText