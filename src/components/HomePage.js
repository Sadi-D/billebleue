import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.view}>
          <Image source={require('../img/billebleue.png')} />
          <View style={{padding: 15}}>
            <Text style={{fontSize: 22, marginBottom: 15, marginTop: 30}}>
              Qui sommes nous ?
            </Text>
            <Text style={{fontSize: 16}}>
              Basée à Nantes, notre équipe travaille avec des producteurs locaux
              afin de proposer les meilleures produits possibles de la région.
              La Bille Bleue est un label qui se veut gage de qualité et de
              respect de l'animal et permet au consommateur d'avoir des
              informations précises sur les produits qu'il scanne avec notre
              application.
            </Text>
          </View>
          <View style={{padding: 15}}>
            <Text style={{fontSize: 24, marginBottom: 15}}>Notre mission</Text>
            <Text style={{fontSize: 16}}>
              - Apporter des informations relatives à la provenance des
              produits, leur transformations éventuelles, la taille des
              exploitations agricoles, les animaux et leurs spécificités.
            </Text>
            <Text style={{fontSize: 16}}>
              - Rapprocher le consommateur d'un monde agricole qui lui est
              souvent inconnu.
            </Text>
            <Text style={{fontSize: 16}}>
              - Faire prendre conscience de la richesse du terroir Français à
              travers notre sélection de produit.
            </Text>
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
    paddingTop: 40,
  },
  article: {
    width: Dimensions.get('window').width / 1.2,
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

export default HomePage;
