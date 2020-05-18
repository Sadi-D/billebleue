import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Articles extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.view}>
          <View style={styles.doubleItems}>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.doubleItems}>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.doubleItems}>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.doubleItems}>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.product} style={styles.article}>
              <Text style={styles.button}>Click me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  article: {
    width: Dimensions.get('window').width / 2.2,
    margin: 5,
    height: 225,
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
    doubleItems: {
      flex:1,
        flexDirection: 'row',
    }
});

export default Articles;
