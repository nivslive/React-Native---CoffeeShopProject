import { Text, View } from "react-native";
import Qr from '../../qrCode';
const Content = () => {
    return (
        <>
            <View>
                <Text> Andrew Daniels </Text>
                <Text> Section 202F </Text>
                <Text> Seat 19F </Text>
                <View>
                    <Text> Purchased</Text>
                    <Text> $2,202</Text>
                </View>
                <View> Card ending in 4214 </View>
                <Qr/>
            </View>
        </>
    )
};

export default Content;