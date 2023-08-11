import { Text, View } from "react-native";
import Qr from '../../qrCode';
import MyText from "../../defaults/MyText";
const Content = () => {
    return (
        <>
            <View className="p-5">
                <View>
                <MyText weight="bold" customClassName="text-[25px]"> Nivs </MyText>
                <MyText weight="regular" customClassName="text-[20px]"> nivsoficial@gmail.com </MyText>
                </View>
                <View className="flex-row">
                <MyText weight="bold" customClassName="text-[18px]"> Comprado </MyText>
                <MyText weight="bold" customClassName="text-[18px] ml-auto"> $2,202 </MyText>
                </View>
                <MyText weight="regular" customClassName="text-[17px]"> (No dia 18/04/2022) </MyText>
                <View className="flex justify-center items-center p-5 m-3"><Qr/></View>
                <Text className="text-center text-[20px]">#421M421O24O1JD2019094</Text>
            </View>
        </>
    )
};

export default Content;