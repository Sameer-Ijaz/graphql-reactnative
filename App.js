import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handlePress = (type, value) => {
    if (type === 'number') {
      setInput(input + value);
    } else if (type === 'operator') {
      setInput(input + ' ' + value + ' ');
    } else if (type === 'clear') {
      setInput('');
    } else if (type === 'calculate') {
      setResult(eval(input));
    }
  };

  return (
    <View>
      <Text>{input}</Text>
      <Text>{result}</Text>
      <Button title="1" onPress={() => handlePress('number', 1)} />
      <Button title="2" onPress={() => handlePress('number', 2)} />
      <Button title="3" onPress={() => handlePress('number', 3)} />
      <Button title="+" onPress={() => handlePress('operator', '+')} />
      <Button title="clear" onPress={() => handlePress('clear')} />
      <Button title="=" onPress={() => handlePress('calculate')} />
    </View>
  );
};

export default App;