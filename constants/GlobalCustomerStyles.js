import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { useTheme } from "../src/routes/ThemeContext";

const useCustomerStyles = () => {
    const { theme } = useTheme();
    let isLightTheme = theme === 'light';

    return StyleSheet.create({
        colorContainer: {
            backgroundColor: isLightTheme ? Colors.light.background : Colors.dark.background,
        },
        basicContainer: {
            backgroundColor: isLightTheme ? 'white' : Colors.dark.background,
        },
        textColor: {
            color: isLightTheme ? Colors.light.text : Colors.dark.text,
        },
        subTextColor: {
            color: isLightTheme ? '#5C5D58' : '#FFFFFF'
        },
        heroHeader: {
            backgroundColor: isLightTheme ? '#F2D6F8' : "#401643",
        },
        heroExpireHeader: {
            color: isLightTheme ? '#792781' : '#C95BDA'
        },
        aiColor: {
            backgroundColor: '#AE3BBE'
        },
        borderColor: {
            borderColor: isLightTheme ? '#D2D4CD' : '#32332E'
        },
        greenBg: {
            backgroundColor: isLightTheme ? '#F3FAEB' : '#131B0E'
        },
        purpleBg: {
            backgroundColor: isLightTheme ? '#FCF5FE' : '#28142A'
        },
        subTextBg: {
            backgroundColor: isLightTheme ? '#D2D4CD' : "#141514"
        },
        profileHeroBg:{
            backgroundColor: isLightTheme ? '#F6F7F4' : "#141514"
        }
    });
};

export default useCustomerStyles;


