import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { useTheme } from "../src/routes/ThemeContext";

const useEarnetStyles = () => {
    const { theme } = useTheme();
    let isLightTheme = theme === 'light';

    return StyleSheet.create({
        colorContainer: {
            backgroundColor: isLightTheme ? Colors.light.background : Colors.dark.background,
        },
        basicContainer: {
            backgroundColor: isLightTheme ? 'white' : Colors.dark.background
        },
        textColor: {
            color: isLightTheme ? Colors.light.text : Colors.dark.text
        },
        heroHeader: {
            backgroundColor: isLightTheme ? '#F2D6F8' : "#401643"
        },
    });
};

export default useEarnetStyles;

