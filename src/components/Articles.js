import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import axios from 'axios';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productList: [],
    };
  }
  componentDidMount() {
    const url =
      'https://my-json-server.typicode.com/sorayamoka/json-server/db/data/products';
    axios
      .get(url)
      .then((res) => {
        const productList = res.data;
        this.setState({productList});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.view}>
          <Image source={require('../img/billebleue.png')} style={{marginBottom:20, marginTop:15}} />
          {/*<View style={styles.doubleItems}>
            {this.state.productList.map((item) => (
              <TouchableOpacity
                onPress={Actions.product}
                style={styles.article}>
                <Image
                  style={styles.productImage}
                  source={require(item.img.toString())}
                />
                <Text style={styles.button}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>*/}

          <View style={styles.doubleItems}>
            <TouchableOpacity onPress={Actions.bifteck} style={styles.article}>
              <Image
                style={styles.productImage}
                source={require('../img/th.png')}
              />
              <Text style={styles.button}>Bifteck - 250g</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.camembert} style={styles.article}>
              <Image
                style={styles.productImage}
                source={require('../img/camembert.png')}
              />
              <Text style={styles.button}>Camembert </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.doubleItems}>
            <TouchableOpacity onPress={Actions.yaourt} style={styles.article}>
              <Image
                style={styles.productImage}
                source={require('../img/yaourt.png')}
              />
              <Text style={styles.button}>Yaourt Nature</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.lait} style={styles.article}>
              <Image
                style={styles.productImage}
                source={require('../img/lait.png')}
              />
              <Text style={styles.button}>Lait de vache - 1L</Text>
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
  productImage: {
    marginBottom: 20,
  },
  doubleItems: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Articles;
