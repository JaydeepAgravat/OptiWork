import { Button, StyleSheet, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import AppText from "../components/ui/AppText"
import AppButton from "../components/ui/AppButton"
import { AppLanguage, useAppTranslation } from "../i18n/translations"
import i18n from "../i18n"
import { toast } from "sonner-native"


export const changeLanguage = async (lang: AppLanguage) => {
    if (i18n.language === lang) return;

    i18n.changeLanguage(lang);
};

const OnBoard = () => {
    const { t: tCommon, } = useAppTranslation();
    const { t: tOnboard } = useAppTranslation("onboard");
    const { t: tBoth } = useAppTranslation(["common", "onboard"]);

    const onChangeToArabic = async () => {

        await changeLanguage("ar")
    };
    const onChangeToEnglish = () => {
        changeLanguage("en")
    };

    // const onNextPress = () => {


    //  }

    // const onSkipPress = () => { }

    return <View style={styles.root}>
        <LinearGradient
            colors={["#7a5af8", "#fefeff"]}
            style={styles.lg}
        />
        <View style={styles.content}>
            <View
                style={styles.texts}
            >
                <AppText>
                    {tCommon("next")}

                </AppText>

                <AppText>

                    {tOnboard("title")}

                </AppText>
                <AppText>
                    {tBoth("onboard:subtitle")}

                </AppText>
                <AppText>
                    {tBoth("common:skip")}
                </AppText>
                <AppText>
                    {tBoth("common:next")}
                </AppText>

                {/* <AppText
                    typographyToken="h3"
                    textAlign="center"

                >{t("title", { ns: "onboard" })}</AppText>
                <AppText
                    typographyToken="body"
                    textAlign="center"
                    colorToken="textSecondary"
                > {t("subtitle", { ns: "onboard" })}</AppText> */}
            </View>
            <View style={styles.tabs}>
                <View style={styles.activeTab} />
                <View style={styles.inactiveTab} />
                <View style={styles.inactiveTab} />
            </View>
            <View
                style={styles.buttons}
            >
                {/* <AppButton title={t("next", { ns: "common" })} onPress={onNextPress} />
                <AppButton title={t("skip", { ns: "common" })} onPress={onSkipPress} /> */}
                <AppButton title="Switch to Arabic (RTL)" onPress={onChangeToArabic} />
                <AppButton title="Switch to English" onPress={onChangeToEnglish} />
                <Button
                    title="Show Toast"
                    onPress={() => toast('Hello, World!')}
                />
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