import { StyleSheet, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import AppText from "../components/ui/AppText"
import AppButton from "../components/ui/AppButton"

const OnBoard = () => {

    const onNextPress = () => { }

    const onSkipPress = () => { }

    return <View style={styles.root}>
        <LinearGradient
            colors={["#7a5af8", "#fefeff"]}
            style={styles.lg}
        />
        <View style={styles.content}>
            <View
                style={styles.texts}
            >
                <AppText
                    typographyToken="h3"
                    textAlign="center"

                >Welcome to Workmate!</AppText>
                <AppText
                    typographyToken="body"
                    textAlign="center"
                    colorToken="textSecondary"
                >Make Smart Decisions! Set clear timelines for projects and celebrate your achievements!</AppText>
            </View>
            <View style={styles.tabs}>
                <View style={styles.activeTab} />
                <View style={styles.inactiveTab} />
                <View style={styles.inactiveTab} />
            </View>
            <View
                style={styles.buttons}
            >
                <AppButton title="Next" onPress={onNextPress}

                />
                <AppButton title="Skip" onPress={onSkipPress} />
            </View>
        </View>

    </View>
}


const styles = StyleSheet.create({
    root: {
        flex: 1, backgroundColor: "#ffffff",


    },
    lg: { flex: 1, },
    content: {
        flex: 1,
        paddingHorizontal: 12,

    },
    texts: {
        flex: 1,
        justifyContent: "flex-end",
        gap: 12,
    },
    buttons: {
        flex: 1, justifyContent: "flex-end",
        gap: 16,
        paddingBottom: 40,
    },
    tabs: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,

    },
    activeTab: {
        width: 20,
        height: 4,
        borderRadius: 8,
        backgroundColor: "#7A5AF8"
    },

    inactiveTab: {
        width: 20,
        height: 4,
        borderRadius: 8,
        backgroundColor: "#EBE9FE"
    },

})

export default OnBoard;