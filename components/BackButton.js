import { useNavigation } from "@react-navigation/native";
import { Button, TouchableOpacity } from "react-native";
import MyText from "./defaults/MyText";

const BackButton = () => {
    const navigation = useNavigation();


    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <>                
                <Button  className="btn" onPress={handleGoBack} title="Voltar" style={{fontFamily:"PoppisRegular"}} />
        </>
    )
};


export default BackButton;