import Head from "./Head";
import Body from './Body';
import { View } from "react-native";
const Ticket = () => {
    return (
        <>
        <View className="w-[80%] shadow" style={[{borderRadiusTopLeft: 20, borderRadiusTopRight: 20}]}> 
            <Head />
            <Body/>
        </View>
        </>
    );
};
export default Ticket;