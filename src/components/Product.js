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

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      products: []
    };
  }

    getProducts(){
    const url = 'http://192.168.16.2:3210/data';
    axios.get(url)
    .then((takeData) => {
      console.log(takeData.data);
      this.setState({
        products: takeData.data,
      })
    })
  };

  render() {

    const dataMongo = this.state.dataku.map((item, index) => {
      let array = [
        'Nom: ',
        item.name,
        ', Numero agrement: ',
        item.num_agrement,
      ].join(' ');
      return (
        <Text style={{fontSize: 20, fontWeight: 'bold'}} key={index}>
          {array}
        </Text>
    });

    return (
      <View style={styles.infoProduct}>
        <ScrollView style={styles.scrollView}>
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
                <TouchableOpacity
                    style={{
                      backgroundColor:'green', borderRadius:10,
                      flex:1, width:100, height:50, margin:20,
                      flexDirection:'row', justifyContent:'center',
                      alignItems:'center'
                    }}
                    onPress={this.getProducts.bind(this)}
                >
                  <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
                    GET PRODUCTS
                  </Text>
                  <View style={{flexDirection:'column',alignItems:'center'}}>
                    {dataMongo}
                  </View>
                </TouchableOpacity>
                <Text style={styles.productTitle}> Bifteck - 250g</Text>
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
                <Text style={styles.label}>01.053.07</Text>
                <Text style={styles.label}>CE</Text>
              </View>
            </View>
          </View>
          <View style={styles.details}>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>Informations Réglementaires</Text>
            </TouchableOpacity>
            {this.state.hidden === false ? (
              <Text>- Caracteristique</Text>
            ) : (
              <Text />
            )}
          </View>

          <View style={styles.details}>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>Type d'élevage</Text>
            </TouchableOpacity>
            <Text>- Caracteristique</Text>
          </View>

          <View style={styles.details}>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>Information élevage</Text>
            </TouchableOpacity>
            <Text>- Caracteristique</Text>
          </View>

          <View style={styles.details}>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>Informations Animal</Text>
            </TouchableOpacity>
            <Text>- Caracteristique</Text>
          </View>

          <View style={styles.details}>
            <TouchableOpacity>
              <Text style={{fontSize: 20}}>Contenus et recette</Text>
            </TouchableOpacity>
            <Text>- Caracteristique</Text>
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
  details: {
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 20,
    marginHorizontal: '5%',
  },
  label: {
    textAlign: 'center',
  },
});

export default Product;
