import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// @ts-ignore
function SecondPage({ navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>FIRST PAGE</Text>
      <Button
        title="go to third"
        onPress={() => {
          navigation.navigate('THIRD');
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
    backgroundColor: '#8cc716',
  },
});

export default SecondPage;
