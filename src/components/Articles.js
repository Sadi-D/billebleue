import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  SectionList,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Articles extends Component {
  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={Actions.product}>
          <Text style={styles.button}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Click me</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button}>Click me</Text>
        </TouchableOpacity>
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
  button: {
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 10,
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});

export default Articles;
