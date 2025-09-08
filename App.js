import React from 'react';
import MainNavigation from './src/routes/MainNavigation';
// import {AppProvider} from './context/userContext';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from "./utlis/hooks/useTheme";

export default function App() {
  return (
    // </AppProvider>
    <>
     {/* <ThemeProvider> */}
      <MainNavigation />
      <Toast />
     {/* </ThemeProvider> */}
     </>
    // <AppProvider>
  );
}