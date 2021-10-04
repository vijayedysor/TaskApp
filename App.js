import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Home from './screens/Home';
import {StyleSheet, Text, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import WebviewScreen from './components/WebviewScreen';

const App = () => {
  const [dataLink, setDataLink] = useState('');

  const handleForGroundDynamicLink = link => {
    console.log('handleForGroundDynamicLink', link.url);
  };

  const handleBackGroundDynamicLink = () => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        console.log('handleBackGroundDynamicLink', link.url);
        setDataLink(link.url);
      })
      .catch(error => {
        console.log('handleBackGroundDynamicLink ERROR', error);
      });

    return null;
  };

  useEffect(() => {
    handleBackGroundDynamicLink();
    const unsubscribeForground = dynamicLinks().onLink(
      handleForGroundDynamicLink,
    );
    return () => {
      unsubscribeForground();
    };
  }, []);

  return <WebviewScreen uri={dataLink} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
