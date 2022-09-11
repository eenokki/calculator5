import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar } from 'react-native';

export default function Calculator({ navigation }) {

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const buttonAdd = () => {
    setResult(parseInt(text1) + parseInt(text2));
    const sum = parseInt(text1) + parseInt(text2);
    const calculation = text1 + " + " + text2 + " = " + sum;
    setData([...data, { key: calculation }]);
    setText1('');
    setText2('');
  }

  const buttonSubstract = () => {
    setResult(parseInt(text1) - parseInt(text2));
    const detract = parseInt(text1) - parseInt(text2);
    const calculation = text1 + " - " + text2 + " = " + detract;
    setData([...data, { key: calculation }]);
    setText1('');
    setText2('');
  }


  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>

      <TextInput
        style={styles.input}
        placeholder="first number"
        keyboardType="numeric"
        onChangeText={text1 => setText1(text1)}
        value={text1}
      />

      <TextInput
        style={styles.input}
        placeholder="second number"
        keyboardType="numeric"
        onChangeText={text2 => setText2(text2)}
        value={text2}
      />

      <View style={styles.button}>
        <Button onPress={buttonAdd} title="+" />
        <Button onPress={buttonSubstract} title="-" />
        <Button
          title="History"
          onPress={() => navigation.navigate('History', { data: data })}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
    width: 150,
    justifyContent: 'space-evenly',
  },
  list: {
    marginTop: 30,
  }
});