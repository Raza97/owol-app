import Toast from "react-native-toast-message";

const ToastMessage = (type, position, text1, visibilityTime) => {
    console.log('ToastMessage called with:', type, position, text1); // This should log correct values now
    Toast.show({
        type: type || 'success',
        position: position || 'top',
        text1: text1,
        visibilityTime: visibilityTime || 2500,
        autoHide: true,
        bottomOffset: 40,
    });
};

export default ToastMessage;
