'use strict';

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Actions} from 'react-native-router-flux';

export default class QRCode extends Component {
  onSuccess = (e) => {
    console.log(e);
  };

  render() {
    return (
      <QRCodeScanner
        onRead={() => Actions.product()}
        reactivate={true}
        reactivateTimeout={10}
      />
    );
  }
}

AppRegistry.registerComponent('default', () => QRCode);
