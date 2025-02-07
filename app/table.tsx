import React, { useState } from 'react'
import { Text, View, TextInput, ScrollView } from 'react-native'

export default function Table() {
  const [number, setNumber] = useState('')
  const [table, setTable] = useState<string[]>([])

  const handleGenerateTable = (num: number) => {
    const newTable = []
    for (let i = 1; i <= 13; i++) {
      newTable.push(`${num} x ${i} = ${num * i}`)
    }
    setTable(newTable)
  }

  const handleChange = (text: string) => {
    setNumber(text)
    const num = parseInt(text, 10)
    if (!isNaN(num)) {
      handleGenerateTable(num)
    } else {
      setTable([])
    }
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
        placeholder="Ingrese un número"
        value={number}
        onChangeText={handleChange}
      />
      <ScrollView style={{ width: '100%' }}>
        {table.map((item, index) => (
          <Text key={index} style={{ fontSize: 20, textAlign: 'center' }}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  )
}
