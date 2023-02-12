import React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { useFunctions } from './contexts/functionsContext';

function ThirdPage(): JSX.Element {
  const { navigator } = useFunctions();

  return (
    <View style={styles.container}>
      <Text>FIRST PAGE</Text>
      <Button
        title="go to third"
        onPress={() => {
          console.log(navigator);
          // @ts-ignore
          navigator.goBack();
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
    backgroundColor: '#d01a1a',
  },
});

export default ThirdPage;
