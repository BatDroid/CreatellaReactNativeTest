import React from 'react';
import { Provider } from "react-redux";
import store from "./src/config/store";
import RootNavigation from "./src/config/navigation"
import { StatusBar, Platform } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={Platform.OS === "android"? "light-content" : "dark-content"} />
      <RootNavigation />
    </Provider>
  );
};

export default App;
