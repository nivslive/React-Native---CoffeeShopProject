import { View } from "react-native";
import BodyComponents from './Body/index';
const Body = () => {
    return (
        <>
            <View className="w-[100%] bg-white" style={{overflow: "hidden"}}>
                <BodyComponents.ticketDraw/>
                <View>
                    <BodyComponents.content/>
                </View>
            </View>
        </>
    );
};


export default Body;