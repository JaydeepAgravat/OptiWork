import { StyleSheet, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import AppText from "../components/ui/AppText"
import AppButton from "../components/ui/AppButton"
import { useTranslation } from "react-i18next"
import { changeLanguage } from "../i18n/i18n.service"

const OnBoard = () => {
    const { t } = useTranslation(["onboard", "common"]);
    const onChangeToArabic = () => changeLanguage("ar");
    const onChangeToEnglish = () => changeLanguage("en");

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

                >{t("title", { ns: "onboard" })}</AppText>
                <AppText
                    typographyToken="body"
                    textAlign="center"
                    colorToken="textSecondary"
                > {t("subtitle", { ns: "onboard" })}</AppText>
            </View>
            <View style={styles.tabs}>
                <View style={styles.activeTab} />
                <View style={styles.inactiveTab} />
                <View style={styles.inactiveTab} />
            </View>
            <View
                style={styles.buttons}
            >
                <AppButton title={t("next", { ns: "common" })} onPress={onNextPress} />
                <AppButton title={t("skip", { ns: "common" })} onPress={onSkipPress} />
                <AppButton title="Switch to Arabic (RTL)" onPress={onChangeToArabic} />
                <AppButton title="Switch to English" onPress={onChangeToEnglish} />
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