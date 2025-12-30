import React from "react";
import { Text, TextProps, StyleSheet, TextStyle } from "react-native";
import { typography, TypographyTokens } from "../../theme/typography";
import colors, { ColorTokens } from "../../theme/colors";

interface AppTextProps extends TextProps {
    children: React.ReactNode;
    typographyToken?: TypographyTokens;
    colorToken?: ColorTokens;
    textAlign?: TextStyle["textAlign"]
}

const AppText = ({
    children,
    typographyToken = "body",
    colorToken = "textPrimary",
    textAlign,
    style,
    ...rest
}: AppTextProps) => {
    const selectedTypography = typography[typographyToken];
    const selectedColor = colors.light[colorToken]

    return (
        <Text
            {...rest}
            style={[
                styles.text,
                {
                    textAlign,
                    fontFamily: selectedTypography.fontFamily,
                    fontSize: selectedTypography.fontSize,
                    lineHeight: selectedTypography.lineHeight,
                    color: selectedColor,
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        includeFontPadding: false,
    },
});

export default AppText;
