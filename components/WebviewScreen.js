import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

// ...
class WebviewScreen extends Component {
  render() {
    return <WebView source={{uri: this.props.uri}} />;
  }
}

export default WebviewScreen;
