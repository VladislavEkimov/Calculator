import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const BUTTONS = [
    ['C', 'DEL', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', 'back', '='],
]

const sizeButton = 70;

export default function StartScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                {
                    BUTTONS.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.row}>
                            {row.map((char, charIndex) => (
                                <TouchableOpacity key={charIndex} style={styles.button}>
                                    <Text>{char}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    buttons: {
        backgroundColor: "green",
        alignSelf: "stretch",
    },
    button: {
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        height: sizeButton,
        width: sizeButton,
    },
    equalButton: {
        height: sizeButton * 2 + 20, // растянем на две строки (20 = 2 * margin)
        alignSelf: "stretch",
    }
})
