import { View, Text } from "react-native";
import MyText from "../defaults/MyText";

const Head = () => {
    return (
        <>
            <View className="w-[100%] bg-black text-white flex-row" style={{padding: 20, borderRadius: 20, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, elevation: 20, shadowColor: "black"}}>

                <View className="flex-column">
                    <View className="flex-row mr-auto items-center">
                    <MyText weight="regular" customClassName="text-white">Seu ingresso para</MyText>
                    <MyText weight="bold" customClassName="text-white text-[30px]">PsyFly</MyText> 
                    </View>

                    <View>
                    <MyText weight="regular" customClassName="text-white">@psyfly</MyText>
                    </View>

                    <View className="flex-column mr-auto pt-5">
                    <MyText weight="bold" customClassName="text-white text-[30px]">18:48pm</MyText> 
                    <MyText weight="regular" customClassName="text-white text-[15px]">November 29, 2022</MyText> 
                    </View>
                </View>

                <View className="ml-auto">
                    <MyText weight="bold" customClassName="text-white">Image</MyText>
                </View>


            </View>
        </>
    );
};


export default Head;