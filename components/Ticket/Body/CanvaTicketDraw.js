import { View } from "react-native";

const defaultColor = '#E0E0E0';
const styles = {
    draw: {
        width: "100%",
        display: "flex",
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    line: {
        width: 50,
        height: 10,
        borderRadius: 0,
        backgroundColor: defaultColor,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: defaultColor,
    }
}

const CanvaTicketDraw = () => {
    return(<>
        <View style={styles.draw}>
            <View style={{...styles.circle, transform: [{translateX: -20}, {translateY: 0}]}}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={{...styles.circle, transform: [{translateX: 20}, {translateY: 0}]}}></View>
        </View>    
    </>);
};

export default CanvaTicketDraw;