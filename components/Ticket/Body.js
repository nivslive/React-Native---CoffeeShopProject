import { View } from "react-native";
import BodyComponents from './Body/index';
const Body = () => {
    return (
        <>
            <View className="w-[100%] bg-white" style={{overflow: "hidden", borderRadius: 0, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 20, shadowColor: "black"}}>
                <BodyComponents.ticketDraw/>
                <View>
                    <BodyComponents.content/>
                </View>
            </View>
        </>
    );
};


export default Body;