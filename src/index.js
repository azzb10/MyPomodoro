/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import assets from './assets/assets';
import {PageHeader} from './components';

const App = () => {
  const item = assets.gif1;

  return (
    <View style={styles.container}>
      <View style={styles.pageHeader}>
        <PageHeader title="titule" subtitle="subtitle" />
      </View>
      <View style={styles.card}>
        <Text>Lottie animation</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e67e22',
  },
  pageHeader: {
    margin: 20,
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 20,
    borderRadius: 20,
    justifyContent: 'space-evenly',
  },
});

export default App;
