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
  Image,
} from 'react-native';
import {Router, Scene, Tabs} from 'react-native-router-flux';

import Articles from './src/components/Articles';
import QRCode from './src/components/QRCode';
import Product from './src/components/Product';

const App: () => React$Node = () => {
  return (
    <>
      {/*<View style={{marginVertical: 10, marginLeft: 10}}>
        <Image source={require('./src/img/billebleue.png')} />
      </View>*/}
      <Router>
        <Tabs
          key="root"
          tabs={true}
          legacy={true}
          lazy={true}
          swipeEnabled={true}
          tabBarPosition="bottom"
          labelStyle={styles.labelStyle}>
          <Scene
            hideNavBar
            key="articles"
            component={Articles}
            title="Articles"
          />
          <Scene
            hideNavBar
            key="qrcode"
            component={QRCode}
            title=" "
            showLabel={false}
            icon={() => <Image source={require('./src/img/qr_icon.png')} />}
          />
          <Scene hideNavBar key="product" component={Product} title="Produit" />
        </Tabs>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ffffff',
  },
  button: {
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  labelStyle: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default App;
