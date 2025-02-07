import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

export default function Sum() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const handleSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2)
    setResult(sum)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          width: '100%',
          paddingHorizontal: 10
        }}
        keyboardType="numeric"
        placeholder="Entra el primer número"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          width: '100%',
          paddingHorizontal: 10
        }}
        keyboardType="numeric"
        placeholder="Entra el segundo número"
        value={num2}
        onChangeText={setNum2}
      />
      <Button title="Sumar" onPress={handleSum} />
      {result !== null && <Text style={{ marginTop: 20, fontSize: 20 }}>Resultado: {result}</Text>}
    </View>
  )
}
