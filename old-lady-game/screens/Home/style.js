import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    viewHome: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 30,
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
        width: "20rem",
        height: "25rem",
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
