import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import axios from 'axios';

class Bifteck extends Component {
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

    console.log(this.state.productList);

    return (
      <View style={styles.infoProduct}>
        <ScrollView style={{paddingVertical:20}}>
          <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
            <Image source={require('../img/billebleue.png')} style={{marginBottom:20}} />
          </View>
          <View
            style={{
              backgroundColor: '#F2F5F3',
              marginHorizontal: 10,
              paddingVertical: 25,
              paddingHorizontal: 10,
            }}>
            <View style={styles.productDescription}>
              <View>
                <Image
                  style={styles.productImage}
                  source={require('../img/th.png')}
                />
              </View>

              <View>
                <Text style={styles.productTitle}> Bifteck</Text>
                <Text>Num agrément</Text>
                <Text>Date de découpage le 08/05/2020</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={styles.productImage}
                source={require('../img/cert_bio.png')}
              />
              <View>
                <Text style={styles.label}>FR</Text>
                <Text style={styles.label}>11.058.07</Text>
                <Text style={styles.label}>nCE</Text>
              </View>
            </View>
          </View>

          <View style={styles.elevage}>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>Information élevage</Text>
            </TouchableOpacity>
            <Text>- Nom de l'élevage: La Ferme de Gérard</Text>
            <Text>- Type d'élevage: Petit élevage</Text>
            <Text>- Commune: Finistère</Text>
            <Text>- Spécificité de l'exploitation: Agriculture Biologique</Text>
          </View>

          <View style={styles.animal}>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>Informations Animal</Text>
            </TouchableOpacity>
            <Text>- Nom de l'animal: Clochette</Text>
            <Text>- Race: Vache bretonne pie noir</Text>
            <Text>- Age à l'abattage: 5 ans</Text>
            <Text>- Lieu de naissance: Morbihan - Ferme de Gérard</Text>
            <Text>- Alimentation: herbe fraiche / foin</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoProduct: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    marginRight: 10,
  },
  productTitle: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 5,
  },
  productDescription: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  elevage: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 15,
    marginHorizontal: '5%',
  },

  animal: {
    marginTop: 20,
    paddingVertical: 15,
    marginHorizontal: '5%',
    marginBottom:40,
  },
  label: {
    textAlign: 'center',
  },
});

export default Bifteck;
