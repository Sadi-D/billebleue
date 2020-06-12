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
import HomePage from './src/components/HomePage';
import Bifteck from './src/components/Bifteck';
import Lait from './src/components/Lait';
import Yaourt from './src/components/Yaourt';
import Camembert from './src/components/Camembert';

const App: () => React$Node = () => {
  return (
    <>
      <Router>
        <Scene hideNavBar>
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
              key="homepage"
              component={HomePage}
              title="A propos"
            />
            <Scene
              hideNavBar
              initial={true}
              key="qrcode"
              component={QRCode}
              title=" "
              showLabel={false}
              icon={() => <Image source={require('./src/img/qr_icon.png')} />}
            />
            <Scene
              hideNavBar
              key="articles"
              component={Articles}
              title="Articles"
            />
          </Tabs>
          <Scene key="bifteck" component={Bifteck} title="bifteck" />
          <Scene key="yaourt" component={Yaourt} title="yaourt" />
          <Scene key="camembert" component={Camembert} title="camembert" />
          <Scene key="lait" component={Lait} title="lait" />
        </Scene>
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
