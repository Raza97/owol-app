import { useEffect, } from 'react';
import { Image, Text, View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import Video from "react-native-video";

const Splash = () => {
    const nav = useNavigation()
    // useEffect(() => {
    //     setTimeout(() => {
    //         nav.dispatch(StackActions.replace('onboarding'))
    //     }, 10000)
    // }, [])

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <Video
                source={require("../../assets/videoLogo/OwOL-Logo-Splashscreen.mp4")} // Your MP4 file
                style={{
                    width: "100%",
                    height: "100%",
                }}
                resizeMode="cover"
                muted={true} // No sound
                repeat={false} // Play once
                onEnd={() => nav.dispatch(StackActions.replace('onboarding'))} // Navigate when video ends
            />
        </View>
    );
}

export default Splash;