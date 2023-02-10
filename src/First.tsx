/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

// @ts-ignore
function FirstPage({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>FIRST PAGE</Text>
      <Button
        title="go to second"
        onPress={() => {
          navigation.navigate('SECOND');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1677c7',
  },
});

export default FirstPage;
