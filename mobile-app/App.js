import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://rdls.org'}}
        style={{marginTop: 20}}
      />
    );
  }
}
