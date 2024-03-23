import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewHome: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
        marginTop: 15,
    },
    titleHome: {
        fontSize: 28,
        fontWeight: "bold",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    viewImage: {
        marginTop: 10,
        marginHorizontal: 20,
    },
    imageHome: {
        width: windowWidth * 0.8,
        height: "80%",
        borderRadius: 20,
    },
    buttonPlay: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
});

export default styles;
