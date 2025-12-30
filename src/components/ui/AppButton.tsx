import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

interface AppButtonProps {
    title: React.ReactNode,
    onPress: () => void,
    disabled?: boolean,
}

const AppButton = ({ title, onPress, disabled }: AppButtonProps) => {
    return <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={styles.root1}
    >
        <AppText typographyToken="bodySmall"
            textAlign="center"
            colorToken="white"
        >
            {title}
        </AppText>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    root1: {
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 100,
        backgroundColor: "#5925DC"

    }
})


export default AppButton;