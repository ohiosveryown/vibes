
import React, { Component } from 'react';
import {
  /*AppRegistry,*/
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import base from './Base';
import Author from './Author';
import Grid from './Grid';


export default class Main extends Component {
  render() {
    return (
      <ScrollView>

        <Text style={styles.titleHeading}>
          INTERIORS
        </Text>

        <Text style={styles.subHeading}>
          Our moodboard for interior inspiration – browse around.
        </Text>

        <Author />

        <Grid />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  titleHeading: {
    fontFamily: 'univers-condensedbold',
    fontSize: 24,
    marginBottom: 16,
  },
  subHeading: {
    fontFamily: 'Karla-Regular',
    fontSize: 20,
  },
});


/*

<Lightbox activeProps={activeProps} backgroundColor="rgba(255,255,255,0.2)" underlayColor="white">
  <Image
    style={{ height: 100, resizeMode: 'contain' }}
    source={require('../Assets/Imgs/lamp.png')}
  />
</Lightbox>

*/
