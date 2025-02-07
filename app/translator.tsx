import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

const numberToSpanish = (num: number): string => {
  const units = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve']
  const teens = [
    'diez',
    'once',
    'doce',
    'trece',
    'catorce',
    'quince',
    'dieciséis',
    'diecisiete',
    'dieciocho',
    'diecinueve'
  ]
  const tens = [
    '',
    '',
    'veinte',
    'treinta',
    'cuarenta',
    'cincuenta',
    'sesenta',
    'setenta',
    'ochenta',
    'noventa'
  ]
  const hundreds = [
    '',
    'cien',
    'doscientos',
    'trescientos',
    'cuatrocientos',
    'quinientos',
    'seiscientos',
    'setecientos',
    'ochocientos',
    'novecientos'
  ]

  if (num < 10) return units[num]
  if (num < 20) return teens[num - 10]
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' y ' + units[num % 10] : '')
  if (num < 1000)
    return (
      hundreds[Math.floor(num / 100)] + (num % 100 !== 0 ? ' ' + numberToSpanish(num % 100) : '')
    )
  if (num === 1000) return 'mil'

  return ''
}

export default function Translator() {
  const [number, setNumber] = useState('')
  const [translation, setTranslation] = useState('')

  const handleTranslate = () => {
    const num = parseInt(number, 10)
    if (num >= 1 && num <= 1000) {
      setTranslation(numberToSpanish(num))
    } else {
      setTranslation('Por favor entra un número entre 1 y 1000')
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
        placeholder="Ingrese un número entre 1 y 1000"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Traducir" onPress={handleTranslate} />
      {translation !== '' && <Text style={{ marginTop: 20, fontSize: 20 }}>{translation}</Text>}
    </View>
  )
}
