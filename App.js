/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Router, Scene, Tabs} from 'react-native-router-flux';

import Articles from './src/components/Articles';
import QRCode from './src/components/QRCode';
import Product from './src/components/Product';

const App: () => React$Node = () => {
  return (
    <Router>
      <Tabs key="root" tabs={true} legacy={true} swipeEnabled={true} tabBarPosition="bottom">
        <Scene hideNavBar key="articles" component={Articles} title="articles" />
        <Scene hideNavBar key="qrcode" component={QRCode} title="qrcode" />
        <Scene hideNavBar key="product" component={Product} title="product" />
      </Tabs>
    </Router>
  );
};

const labelStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});

export default App;
