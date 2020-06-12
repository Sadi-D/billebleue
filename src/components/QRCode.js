'use strict';

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Dimensions,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {Actions} from 'react-native-router-flux';

export default class QRCode extends Component {
  onSuccess = (e) => {
    console.log(e);
  };

  render() {
    return (
      <View>
        <QRCodeScanner
          onRead={() => Actions.lait()}
          cameraStyle={{
            height: Dimensions.get('window').height,
            width: 200,
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('default', () => QRCode);
